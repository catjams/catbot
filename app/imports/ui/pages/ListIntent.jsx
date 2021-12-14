import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader, Input, Pagination } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Intents } from '../../api/Intents/Intents';
import Intent from '../components/Intent';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListIntent extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  state = { value: '', activePage: 1 }

  handleInputChange = (e, { value }) => this.setState({ value }, this.setState({ activePage: 1 }))

  filterResponse(str) {
    return str.contactDetails.indexOf(this) > -1 || str.summary.indexOf(this) > -1 || str.feedbackType.indexOf(this) > -1 || str.createdAt.toLocaleDateString('en-US').indexOf(this) > -1;
  }

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

  // Render the page once subscriptions have been received.
  renderPage() {
    const { value } = this.state;
    const { activePage } = this.state;
    const itemPerPage = 10;
    const totalPage = Math.ceil(this.props.intents.filter(this.filterResponse, value).length / itemPerPage);
    return (
      <Container id='list-intent-page'>
        <Header as="h2" textAlign="center">List Intent</Header>
        <Input focus
          icon='search'
          onChange={this.handleInputChange}
          value={value}
          placeholder='Search...'
        />
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Phrase</Table.HeaderCell>
              <Table.HeaderCell>Response</Table.HeaderCell>
              <Table.HeaderCell>Edit</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {/* eslint-disable-next-line max-len */}
            {this.props.intents.filter(this.filterResponse, value).slice((activePage - 1) * itemPerPage, (activePage - 1) * itemPerPage + itemPerPage).map((intent) => <Intent key={intent._id} intent={intent} Intents={Intents} />)}
          </Table.Body>
        </Table>
        <Pagination activePage={activePage} totalPages={totalPage} onPageChange={this.handlePaginationChange}/>
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
ListIntent.propTypes = {
  intents: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Intents.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const intents = Intents.collection.find({}).fetch();
  return {
    intents,
    ready,
  };
})(ListIntent);
