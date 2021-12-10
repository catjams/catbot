import React from 'react';
import { Tab, Loader } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { UserInputs } from '../../api/userStuffs/UserInputs';
import { UserRatings } from '../../api/userStuffs/userRatings';
import { UserStats } from '../../api/userStuffs/UserStats';
import UserStatsTab from '../components/UserStatsTab';
import UserInputsTab from '../components/UserInputsTab';
import UserRatingsTab from '../components/UserRatingsTab';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class AnalyticsAdmin extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {

    const panes = [
      {
        menuItem: 'User Statistics',
        render: () => <Tab.Pane attached={false}>
          <UserStatsTab stats={this.props.stats} inputs={this.props.inputs} ratings={this.props.ratings}/>
        </Tab.Pane>,
      },
      {
        menuItem: 'User Responses',
        render: () => <Tab.Pane attached={false}>
          <UserInputsTab inputs={this.props.inputs}/>
        </Tab.Pane>,
      },
      {
        menuItem: 'User Ratings',
        render: () => <Tab.Pane attached={false}>
          <UserRatingsTab ratings={this.props.ratings}/>
        </Tab.Pane>,
      },
    ];

    return (
      <Tab id='analytics-page' menu={{ secondary: true, pointing: true }} panes={panes} />
    );
  }

}
AnalyticsAdmin.propTypes = {
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
})(AnalyticsAdmin);
