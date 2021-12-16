import React from 'react';
import { Grid, Statistic, Icon, Dropdown, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import UserRatingCard from '../UserRatingCard';
import { UserRatings } from '../../../api/userStuffs/UserRatings';

const options = [
  { key: 1, text: 'All', value: 1 },
  { key: 2, text: 'Helpful', value: 2 },
  { key: 3, text: 'Not Helpful', value: 3 },
];

/** Renders a table containing all of the UserFeedBack documents. Use <UserFeedBack> to render each row. */
class UserRatingsTab extends React.Component {

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
      return rating.experience === 'Helpful';
    }
    if (this === 3) {
      return rating.experience === 'Not helpful';
    }
    return rating.experience === 'Helpful' || rating.experience === 'Not helpful';
  }

  // Render the page once subscriptions have been received.
  render() {
    const ratings = _.pluck(this.props.ratings, 'experience');
    const ratingLabels = _.uniq(ratings);
    const ratingNum = this.countFunction(ratings, ratingLabels);
    const displayNum = _.object(ratingLabels, ratingNum);
    const { value } = this.state;
    return (
      <Grid container={true}>
        <Grid.Row>
          <Statistic color='green'>
            <Statistic.Value><Icon name='thumbs up'/>{displayNum.helpful}</Statistic.Value>
            <Statistic.Label>Helpful</Statistic.Label>
          </Statistic>
          <Statistic color='red'>
            <Statistic.Value><Icon name='thumbs down'/>{displayNum['not helpful']}</Statistic.Value>
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
UserRatingsTab.propTypes = {
  ratings: PropTypes.array.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default UserRatingsTab;
