import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Loader, Grid } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import { UserStats } from '../../api/userStuffs/UserStats';
import Analytics from '../components/Analytics';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class AnalyticsAdmin extends React.Component {
  // Render the page once subscriptions have been received.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const intents = _.pluck(this.props.stats, 'intent');
    const intentLabels = _.uniq(intents);
    const intentsNum = Array(intentLabels.length).fill(0);
    for (let i = 0; i < intentLabels.length; i++) {
      for (let j = 0; j < intents.length; j++) {
        if (intentLabels[i] === intents[j]) {
          intentsNum[i]++;
        }
      }
    }

    return (
      <Grid container={true}>
        <Grid.Row>
          <Header as="h1" textAlign="center">Bot Analytics</Header>
        </Grid.Row>
        <Grid.Row>
          <Analytics intentLabels={intentLabels} numbers={intentsNum}/>
        </Grid.Row>
      </Grid>
    );
  }
}

AnalyticsAdmin.propTypes = {
  stats: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to UserStats documents.
  const subscription = Meteor.subscribe(UserStats.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the UserStats documents
  const stats = UserStats.collection.find({}).fetch();
  return {
    stats,
    ready,
  };
})(AnalyticsAdmin);
