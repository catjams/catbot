import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader, Input, Pagination } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { UserFeedbacks } from '../../api/userFeedback/UserFeedback';
import Feedback from '../components/Feedback';

/** Renders a table containing all of the UserFeedBack documents. Use <UserFeedBack> to render each row. */
class ListFeedback extends React.Component {

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
    const totalPage = Math.ceil(this.props.feedbacks.filter(this.filterResponse, value).length / itemPerPage);
    return (
      <Container id='view-feedback-page'>
        <Header as="h2" textAlign="center">List User Feedback</Header>
        <Input focus
          icon='search'
          onChange={this.handleInputChange}
          value={value}
          placeholder='Search...'
        />
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Contact Details</Table.HeaderCell>
              <Table.HeaderCell>Summary</Table.HeaderCell>
              <Table.HeaderCell>Feedback Type</Table.HeaderCell>
              <Table.HeaderCell>Created Date</Table.HeaderCell>
              <Table.HeaderCell>Info</Table.HeaderCell>
              <Table.HeaderCell>Remove</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {/* eslint-disable-next-line max-len */}
            {this.props.feedbacks.filter(this.filterResponse, value).slice((activePage - 1) * itemPerPage, (activePage - 1) * itemPerPage + itemPerPage).map((feedback) => <Feedback key={feedback._id} feedback={feedback} UserFeedbacks={UserFeedbacks} />)}
          </Table.Body>
        </Table>
        <Pagination activePage={activePage} totalPages={totalPage} onPageChange={this.handlePaginationChange}/>
      </Container>
    );
  }
}

// Require an array of UserFeedBack documents in the props.
ListFeedback.propTypes = {
  feedbacks: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to UserFeedBack documents.
  const subscription = Meteor.subscribe(UserFeedbacks.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the UserFeedBack documents
  const feedbacks = UserFeedbacks.collection.find({}).fetch();
  return {
    feedbacks,
    ready,
  };
})(ListFeedback);
