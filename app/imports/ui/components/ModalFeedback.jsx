import React from 'react';
import { Modal, Header, Button, Icon } from 'semantic-ui-react';

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
        <Modal.Description>
          <Header><Icon name='user circle'/>
              Contact Details: {feedbackInfo.info.contactDetails}
          </Header>
          <Header as='h3'>Summary: </Header>
          <p>{feedbackInfo.info.summary}</p>
          <Header as='h3'>Feedback Type: </Header>
          <p>{feedbackInfo.info.feedbackType}</p>
          <Header as='h3'>Description: </Header>
          <p>{feedbackInfo.info.description}</p>
          <Header as='h4' disabled>
              Created At: {feedbackInfo.info.createdAt.toLocaleDateString('en-US')}
          </Header>
        </Modal.Description>
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
