import React from 'react';
import { Modal, Header, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import FeedBack from './Feedback';

class ModalFeedback extends React.Component {

  confirmClick = (event, data) => {
    console.log(`Passed in Prop Value: ${this.props.valueIntoModal}`);
    this.props.handleClose();
  }

  render() {
    return (
      <Modal
        open={this.props.modalOpen}
        size='small'
        closeOnEscape={true}
        closeOnRootNodeClick={true}
      >
        <Header icon='browser' content='Confirm?' />
        <Modal.Content>
          <h3>Please confirm:</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button
            negative
            type='button'
            icon='remove'
            labelPosition='right'
            onClick={this.props.handleClose}
            content='Cancel'
          />
          <Button
            positive
            type='button'
            icon='checkmark'
            labelPosition='right'
            onClick={this.confirmClick}
            content='Confirm'
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

FeedBack.propTypes = {
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

export default ModalFeedback;
