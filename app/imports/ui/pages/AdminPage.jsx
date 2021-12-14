import React from 'react';
import { Tab, Loader } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { AdminActivities } from '../../api/adminActivities/AdminActivities';
import AddAccountTab from '../components/adminTabs/AddAccountTab';
import ActivityFeedTab from '../components/adminTabs/ActivityFeedTab';
import ViewAccountTab from '../components/adminTabs/ViewAccountTab';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class AdminPage extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {

    const panes = [
      { menuItem: 'Activity Feed', render: () => <Tab.Pane>
        {this.props.activities.map((activity) => <ActivityFeedTab key={activity._id} actvity={activity}/>)}
      </Tab.Pane> },
      { menuItem: 'Add New Admin Account', render: () => <Tab.Pane style={{ textAlign: 'center' }} >
        <div>
          <AddAccountTab/>
        </div>
      </Tab.Pane> },
      { menuItem: 'View All Accounts', render: () => <Tab.Pane>
        <ViewAccountTab/>
      </Tab.Pane> },
    ];

    return (
      <Tab id='admin-page' menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
    );
  }

}
AdminPage.propTypes = {
  activities: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  // Get access to UserFeedBack documents.
  const subscription = Meteor.subscribe(AdminActivities.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the UserFeedBack documents
  const activities = AdminActivities.collection.find({}).fetch();
  return {
    activities,
    ready,
  };
})(AdminPage);
