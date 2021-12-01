import React from 'react';
import { Modal, Header, Button } from 'semantic-ui-react';

function ModalFeedback() {
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
        <p>Feedback information</p>
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
