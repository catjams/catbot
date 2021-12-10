import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Loader, Grid, Statistic, Icon, Dropdown, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import UserRatingCard from './UserRatingCard';
import { UserRatings } from '../../api/userStuffs/userRatings';

const options = [
  { key: 1, text: 'All', value: 1 },
  { key: 2, text: 'Helpful', value: 2 },
  { key: 3, text: 'Not Helpful', value: 3 },
];

/** Renders a table containing all of the UserFeedBack documents. Use <UserFeedBack> to render each row. */
class UserStatsTab extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
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

  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  filterRating(rating) {
    if (this === 2) {
      return rating.experience === 'helpful';
    }
    if (this === 3) {
      return rating.experience === 'not helpful';
    }
    return rating.experience === 'helpful' || rating.experience === 'not helpful';
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    const ratings = _.pluck(this.props.ratings, 'experience');
    const ratingLabels = _.uniq(ratings);
    const ratingNum = this.countFunction(ratings, ratingLabels);
    const { value } = this.state;
    return (
      <Grid container={true}>
        <Grid.Row>
          <Statistic color='green'>
            <Statistic.Value><Icon name='thumbs up'/>{ratingNum[1]}</Statistic.Value>
            <Statistic.Label>Helpful</Statistic.Label>
          </Statistic>
          <Statistic color='red'>
            <Statistic.Value><Icon name='thumbs down'/>{ratingNum[0]}</Statistic.Value>
            <Statistic.Label>Not Helpful</Statistic.Label>
          </Statistic>
          <Grid.Column>
            <b>Filter</b>
            <Dropdown
              onChange={this.handleChange}
              options={options}
              placeholder='Choose an option'
              selection
              value={value}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Card.Group>
            {this.props.ratings.filter(this.filterRating, value).map((rating) => <UserRatingCard key={rating._id} rating={rating} UserRatings={UserRatings}/>)}
          </Card.Group>
        </Grid.Row>
      </Grid>
    );
  }
}

// Require an array of UserFeedBack documents in the props.
UserStatsTab.propTypes = {
  ratings: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to UserFeedBack documents.
  const subscription = Meteor.subscribe(UserRatings.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the UserFeedBack documents
  const ratings = UserRatings.collection.find({}).fetch();
  return {
    ratings,
    ready,
  };
})(UserStatsTab);
