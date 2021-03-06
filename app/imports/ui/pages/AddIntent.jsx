import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Intents } from '../../api/Intents/Intents';
import { AdminActivities } from '../../api/adminActivities/AdminActivities';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  name: String,
  phrase: String,
  response: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddIntent extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { name, phrase, response } = data;
    const owner = Meteor.user().username;
    Intents.collection.insert({ name, phrase, response, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          AdminActivities.collection.insert({
            accountName: Meteor.user().username,
            action: 'added',
            type: 'intent',
            id: 'no id',
            createdAt: new Date(),
          });
          formRef.reset();
        }
      });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    let fRef = null;
    return (
      <Grid id='add-intent-page' container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Add Intent</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment>
              <TextField id='name' name='name'/>
              <TextField id='phrase' name='phrase'/>
              <TextField id='response' name='response'/>
              <SubmitField id='Submit' value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

export default AddIntent;
