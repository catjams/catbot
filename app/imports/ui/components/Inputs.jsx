import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { UserInputs } from '../../api/userStuffs/UserInputs';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class Input extends React.Component {
  removeInput(docID) {
    this.props.UserInputs.collection.remove(docID);
  }

  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.input.session}</Table.Cell>
        <Table.Cell>{this.props.input.input}</Table.Cell>
        <Table.Cell>{this.props.input.time}</Table.Cell>
        <Table.Cell>
          <Button icon onClick={() => this.removeInput(this.props.input._id)}>
            <Icon name='trash' />
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
Input.propTypes = {
  input: PropTypes.shape({
    input: PropTypes.string,
    time: PropTypes.string,
    session: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  UserInputs: PropTypes.object.isRequired,
};

export default Input;
