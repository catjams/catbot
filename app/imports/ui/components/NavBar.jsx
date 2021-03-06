import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { marginBottom: '10px', backgroundColor: '#3469CA', position: 'sticky', zIndex: 1 };
    return (
      <Menu style={menuStyle} attached="top" borderless inverted>
        <Menu.Item as={NavLink} activeClassName="active" exact to="/" key='landing'>
          <Header inverted as='h1'>OHA Catbot</Header>
        </Menu.Item>
        <Menu.Item id='navbar-tutorial-page' as={NavLink} activeClassName="active" exact to="/tutor" key='tutor'>Tutorial</Menu.Item>
        <Menu.Item id='navbar-send-feedback-page' as={NavLink} activeClassName="active" exact to="/sendfeedback" key='sendfeedback'>Send Feedback</Menu.Item>
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item id='navbar-admin-page' as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin Page</Menu.Item>
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item id='navbar-view-feedback-page' as={NavLink} activeClassName="active" exact to="/viewfeedbacks" key='viewfeedbacks'>View Feedback</Menu.Item>
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item id='navbar-analytics-page' as={NavLink} activeClassName="active" exact to="/analytics" key='analytics'>Analytics</Menu.Item>
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item id='navbar-add-intent-page' as={NavLink} activeClassName="active" exact to="/addintent" key='addintent'>Add Intent</Menu.Item>
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item id='navbar-list-intent-page' as={NavLink} activeClassName="active" exact to="/listintent" key='listintent'>List Intent</Menu.Item>
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item>
            <Dropdown text="External Websites">
              <Dropdown.Menu>
                <Dropdown.Item text="Botcopy" target="_blank" rel="noopener noreferrer" href="https://portal.botcopy.com/"/>
                <Dropdown.Item text="Janis" target="_blank" rel="noopener noreferrer" href="https://www.janis.ai/dashboard/"/>
                <Dropdown.Item text="Dialogflow" target="_blank" rel="noopener noreferrer" href="https://dialogflow.cloud.google.com/#/agent/ohabot-fmvm/intents"/>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        ) : ''}
        <Menu.Item position="right">
          {this.props.currentUser === '' ? (
            <Dropdown id="login-dropdown" text="Admin Login" pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="login-dropdown-sign-in" icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown id="navbar-current-user" text={this.props.currentUser} pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="navbar-sign-out" icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Menu.Item>
      </Menu>
    );
  }
}

// Declare the types of all properties.
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

// Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(NavBarContainer);
