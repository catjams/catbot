import React from 'react';
import { Header, Table, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { UserInputs } from '../../api/userStuffs/UserInputs';
import Inputs from './Inputs';

/** Renders a table containing all of the UserFeedBack documents. Use <UserFeedBack> to render each row. */
class UserInputsTab extends React.Component {

  countFunction(subject, label) {
    const arr = Array(label.length).fill(0);
    for (let i = 0; i < label.length; i++) {
      for (let j = 0; j < subject.length; j++) {
        if (label[i] === subject[j]) {
          arr[i]++;
        }
      }
    }
    return arr;
  }

  // Render the page once subscriptions have been received.
  render() {
    return (
      <Container>
        <Header as="h2" textAlign="center">List of User Responses</Header>
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
            {this.props.inputs.map((input) => <Inputs key={input._id} input={input} UserInputs={UserInputs} />)}
          </Table.Body>
        </Table>
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
