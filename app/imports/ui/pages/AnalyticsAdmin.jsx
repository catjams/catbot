import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Loader, Grid, Tab, Container, Table, Card, Statistic, Icon } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import { UserStats } from '../../api/userStuffs/UserStats';
import Analytics from '../components/Analytics';
import { UserInputs } from '../../api/userStuffs/UserInputs';
import { UserRatings } from '../../api/userStuffs/userRatings';
import Inputs from '../components/Inputs';
import AnalyticsTwo from '../components/AnalyticsTwo';
import UserRatingCard from '../components/UserRatingCard';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class AnalyticsAdmin extends React.Component {
  // Render the page once subscriptions have been received.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

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

  renderPage() {
    const intents = _.pluck(this.props.stats, 'intent');
    const intentLabels = _.uniq(intents);
    const intentsNum = this.countFunction(intents, intentLabels);

    const dates = _.map(_.pluck(this.props.stats, 'time'), function (date) {
      return date.substring(0, date.indexOf('T'));
    });
    const dateLabels = _.uniq(dates);
    const datesNum = this.countFunction(dates, dateLabels);

    const ratings = _.pluck(this.props.ratings, 'experience');
    const ratingLabels = _.uniq(ratings);
    const ratingNum = this.countFunction(ratings, ratingLabels);

    const panes = [
      {
        menuItem: 'User Statistics',
        render: () => <Tab.Pane attached={false}>
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
        </Tab.Pane>,
      },
      {
        menuItem: 'User Responses',
        render: () => <Tab.Pane attached={false}>
          <Container>
            <Header as="h2" textAlign="center">List of User Responses</Header>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Session</Table.HeaderCell>
                  <Table.HeaderCell>Responses</Table.HeaderCell>
                  <Table.HeaderCell>Time</Table.HeaderCell>
                  <Table.HeaderCell>Remove</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.props.inputs.map((input) => <Inputs key={input._id} input={input} UserInputs={UserInputs} />)}
              </Table.Body>
            </Table>
          </Container>
        </Tab.Pane>,
      },
      {
        menuItem: 'User Ratings',
        render: () => <Tab.Pane attached={false}>
          <Grid container={true}>
            <Grid.Row>
              <Statistic color='green'>
                <Statistic.Value><Icon name='thumbs up'/>{ratingNum[0]}</Statistic.Value>
                <Statistic.Label>Helpful</Statistic.Label>
              </Statistic>
              <Statistic color='red'>
                <Statistic.Value><Icon name='thumbs down'/>{ratingNum[1]}</Statistic.Value>
                <Statistic.Label>Not Helpful</Statistic.Label>
              </Statistic>
            </Grid.Row>
            <Grid.Row>
              <Card.Group>
                {this.props.ratings.map((rating) => <UserRatingCard key={rating._id} rating={rating} UserRatings={UserRatings}/>)}
              </Card.Group>
            </Grid.Row>
          </Grid>
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

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
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
