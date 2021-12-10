import React from 'react';
import { Header, Table, Container, Input, Pagination } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { UserInputs } from '../../api/userStuffs/UserInputs';
import Inputs from './Inputs';

/** Renders a table containing all of the UserFeedBack documents. Use <UserFeedBack> to render each row. */
class UserInputsTab extends React.Component {

  state = { value: '' }

  handleInputChange = (e, { value }) => this.setState({ value })

  filterResponse(str) {
    return str.input.indexOf(this) > -1 || str.time.indexOf(this) > -1 || str.session.indexOf(this) > -1;
  }

  handlePaginationChange = (e, { page }) => this.setState({ activePage: Math.ceil(page) });

  // Render the page once subscriptions have been received.
  render() {
    const { value } = this.state;
    const page = 1;
    const itemPerPage = 15;
    const totalPage = Math.ceil(this.props.inputs.length / itemPerPage);
    return (
      <Container>
        <Header as="h2" textAlign="center">List of User Responses</Header>
        <Input focus
          icon='search'
          onChange={this.handleInputChange}
          placeholder='Search...'
        />
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Session</Table.HeaderCell>
              <Table.HeaderCell>Responses</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell>Remove</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.inputs.filter(this.filterResponse, value).map((input) => <Inputs key={input._id} input={input} UserInputs={UserInputs} />)}
          </Table.Body>
        </Table>
        <Pagination
          activePage={page}
          totalPages={totalPage}
          onPageChange={this.handlePaginationChange}
        />
      </Container>
    );
  }
}

// Require an array of UserFeedBack documents in the props.
UserInputsTab.propTypes = {
  inputs: PropTypes.array.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default UserInputsTab;
