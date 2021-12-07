import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Component for layout out a Profile Card. */
class UserRatingCard extends React.Component {
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
      </Card>
    );
  }
}

UserRatingCard.propTypes = {
  rating: PropTypes.shape({
    comment: PropTypes.string,
    experience: PropTypes.string,
    createdAt: PropTypes.date,
  }).isRequired,
};

export default UserRatingCard;
