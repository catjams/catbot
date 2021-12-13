import React from 'react';
import { Tab, Loader } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { UserInputs } from '../../api/userStuffs/UserInputs';
import { UserRatings } from '../../api/userStuffs/UserRatings';
import { UserStats } from '../../api/userStuffs/UserStats';
import { AddAccountTab } from '../components/adminTabs/AddAccountTab';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class AdminPage extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {

    const panes = [
      { menuItem: 'Activity Feed', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
      { menuItem: 'Add New Admin Account', render: () => <Tab.Pane style={{ textAlign: 'center' }} >
        <AddAccountTab/>
      </Tab.Pane> },
      { menuItem: 'View All Accounts', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    ];

    return (
      <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
    );
  }

}
AdminPage.propTypes = {
  stats: PropTypes.array.isRequired,
  inputs: PropTypes.array.isRequired,
  ratings: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  // Get access to UserStats documents.
  const subscription = Meteor.subscribe(UserStats.adminPublicationName);
  const subscription2 = Meteor.subscribe(UserInputs.adminPublicationName);
  const subscription3 = Meteor.subscribe(UserRatings.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready() && subscription2.ready() && subscription3.ready();
  // Get the UserStats documents
  const stats = UserStats.collection.find({}).fetch();
  const inputs = UserInputs.collection.find({}).fetch();
  const ratings = UserRatings.collection.find({}).fetch();
  return {
    stats,
    inputs,
    ratings,
    ready,
  };
})(AdminPage);
