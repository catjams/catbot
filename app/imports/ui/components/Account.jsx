import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class Account extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.account.username}</Table.Cell>
        <Table.Cell>{this.props.account.password}</Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
Account.propTypes = {
  account: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
};

export default Account;
