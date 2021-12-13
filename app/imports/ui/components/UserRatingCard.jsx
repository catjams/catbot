import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { AdminActivities } from '../../api/adminActivities/AdminActivities';

/** Component for layout out a Profile Card. */
class UserRatingCard extends React.Component {
  removeRating(docID) {
    AdminActivities.collection.insert({
      accountName: 'admin',
      action: 'removed',
      type: 'user rating card',
      id: docID,
      createdAt: new Date(),
    });
    this.props.UserRatings.collection.remove(docID);
  }

  render() {
    let cardColor = null;
    if (this.props.rating.experience === 'helpful') {
      cardColor = 'green';
    } else {
      cardColor = 'red';
    }
    return (
      <Card color={cardColor}>
        <Card.Content>
          <Card.Header>{this.props.rating.experience}</Card.Header>
          <Card.Description>
            {this.props.rating.comment}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {this.props.rating.createdAt.toLocaleDateString('en-US')}
        </Card.Content>
        <Card.Content extra>
          <Button onClick={() => this.removeRating(this.props.rating._id)}>
            Remove
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

UserRatingCard.propTypes = {
  rating: PropTypes.shape({
    comment: PropTypes.string,
    experience: PropTypes.string,
    createdAt: PropTypes.date,
    _id: PropTypes.string,
  }).isRequired,
  UserRatings: PropTypes.object.isRequired,
};

export default UserRatingCard;
