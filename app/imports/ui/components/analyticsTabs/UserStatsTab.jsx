import React from 'react';
import { Header, Grid, Statistic, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import Analytics from './Analytics';
import AnalyticsTwo from './AnalyticsTwo';

/** Renders a table containing all of the UserFeedBack documents. Use <UserFeedBack> to render each row. */
class UserStatsTab extends React.Component {

  countFunction(subject, label) {
    const arr = Array(label.length).fill(0);
    for (let i = 0; i < label.length; i++) {
      for (let j = 0; j < subject.length; j++) {
        if (label[i] === subject[j]) {
          arr[i]++;
        }
      }
    }
    return arr;
  }

  // Render the page once subscriptions have been received.
  render() {
    const intents = _.pluck(this.props.stats, 'intent');
    const intentLabels = _.uniq(intents);
    const intentsNum = this.countFunction(intents, intentLabels);
    const dates = _.map(_.pluck(this.props.stats, 'time'), function (date) {
      return date.substring(0, date.indexOf('T'));
    });
    const dateLabels = _.uniq(dates);
    const datesNum = this.countFunction(dates, dateLabels);
    return (
      <Grid container={true}>
        <Grid.Row centered>
          <Statistic>
            <Statistic.Value><Icon name='talk'/> {intents.length}</Statistic.Value>
            <Statistic.Label>Total Number of Intents</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value><Icon name='users'/> {this.props.inputs.length}</Statistic.Value>
            <Statistic.Label>Total Number of User Responses</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value><Icon name='tasks'/> {this.props.ratings.length}</Statistic.Value>
            <Statistic.Label>Total Number of User Ratings</Statistic.Label>
          </Statistic>
        </Grid.Row>
        <Grid.Row>
          <Header as="h1" textAlign="center">Bot Analytics</Header>
        </Grid.Row>
        <Grid.Row>
          <Analytics intentLabels={intentLabels} numbers={intentsNum}/>
        </Grid.Row>
        <Grid.Row>
          <AnalyticsTwo dateLabels={dateLabels} numbers={datesNum}/>
        </Grid.Row>
      </Grid>
    );
  }
}

// Require an array of UserFeedBack documents in the props.
UserStatsTab.propTypes = {
  stats: PropTypes.array.isRequired,
  inputs: PropTypes.array.isRequired,
  ratings: PropTypes.array.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default UserStatsTab;
