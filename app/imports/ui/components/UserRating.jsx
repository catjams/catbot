import React from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, HiddenField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { UserRatings } from '../../api/userStuffs/userRatings';

const bridge = new SimpleSchema2Bridge(UserRatings.schema);

function UserRating() {
  const [open, setOpen] = React.useState(false);
  let fRef = null;

  function submit(data, formRef) {
    const { comment, experience, createdAt } = data;
    UserRatings.collection.insert({ comment, experience, createdAt },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Mahalo!', 'success');
          formRef.reset();
        }
      });
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color='blue' size='huge'><Icon name='thumbs up'/>Rate Your Experience</Button>}
    >
      <Modal.Header>Please rate your experience about today!</Modal.Header>
      <Modal.Content>
        <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)} >
          <TextField name='comment'/>
          <SelectField name='experience' />
          <SubmitField value='Submit'/>
          <ErrorsField/>
          <HiddenField name='createdAt' value={new Date()}/>
        </AutoForm>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
            Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default UserRating;
