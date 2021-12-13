import React from 'react';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class AddAccountTab extends React.Component {
  render() {
    return (
      <Button style={{ marginTop: '30px' }} as={NavLink} color='grey' size='small' className='pageLabel3' exact to="/signup" key='signup'>
      Add a new admin account here!
      </Button>
    );
  }
}

export default AddAccountTab;
