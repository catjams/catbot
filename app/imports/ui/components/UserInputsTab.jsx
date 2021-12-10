import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Loader, Table, Container } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { UserInputs } from '../../api/userStuffs/UserInputs';
import Inputs from './Inputs';

/** Renders a table containing all of the UserFeedBack documents. Use <UserFeedBack> to render each row. */
class UserStatsTab extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

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
  renderPage() {
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
UserStatsTab.propTypes = {
  inputs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to UserFeedBack documents.
  const subscription = Meteor.subscribe(UserInputs.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the UserFeedBack documents
  const inputs = UserInputs.collection.find({}).fetch();
  return {
    inputs,
    ready,
  };
})(UserStatsTab);
