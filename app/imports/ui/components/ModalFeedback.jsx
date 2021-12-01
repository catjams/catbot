import React from 'react';
import { Modal, Header, Button } from 'semantic-ui-react';

function ModalFeedback(feedbackInfo) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button icon ='info'/>}
    >
      <Header content='Feedback Details'/>
      <Modal.Content>
        <p>Created At: {feedbackInfo.info.createdAt.toLocaleDateString('en-US')}</p>
        <p>Contact Details: {feedbackInfo.info.contactDetails}</p>
        <p>Summary: {feedbackInfo.info.summary}</p>
        <p>Feedback Type: {feedbackInfo.info.feedbackType}</p>
        <p>Description: {feedbackInfo.info.description}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          icon='remove'
          onClick={() => setOpen(false)}
        />
      </Modal.Actions>
    </Modal>
  );
}

export default ModalFeedback;
