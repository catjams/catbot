import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ModalFeedback from './ModalFeedback';
import { AdminActivities } from '../../api/adminActivities/AdminActivities';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class Feedback extends React.Component {
  removeFeedback(docID) {
    AdminActivities.collection.insert({
      accountName: Meteor.user().username,
      action: 'removed',
      type: 'user feedback',
      id: docID,
      createdAt: new Date(),
    });
    this.props.UserFeedbacks.collection.remove(docID);
  }

  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.feedback.contactDetails}</Table.Cell>
        <Table.Cell>{this.props.feedback.summary}</Table.Cell>
        <Table.Cell>{this.props.feedback.feedbackType}</Table.Cell>
        <Table.Cell>{this.props.feedback.createdAt.toLocaleDateString('en-US')}</Table.Cell>
        <Table.Cell>
          <ModalFeedback info={this.props.feedback}/>
        </Table.Cell>
        <Table.Cell>
          <Button icon onClick={() => this.removeFeedback(this.props.feedback._id)}>
            <Icon name='trash' />
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
Feedback.propTypes = {
  feedback: PropTypes.shape({
    contactDetails: PropTypes.string,
    summary: PropTypes.string,
    feedbackType: PropTypes.string,
    _id: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.date,
  }).isRequired,
  UserFeedbacks: PropTypes.object.isRequired,
};

export default Feedback;
