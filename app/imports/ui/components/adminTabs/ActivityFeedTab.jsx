import React from 'react';
import { Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ActivityFeedTab extends React.Component {
  render() {
    return (
      <Feed>
        <Feed.Event>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>{this.props.actvity.accountName} </Feed.User> {this.props.actvity.action} a {this.props.actvity.type} (id: {this.props.actvity.id})
            </Feed.Summary>
            <Feed.Date>{this.props.actvity.createdAt.toLocaleDateString('en-US')}</Feed.Date>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    );
  }
}

ActivityFeedTab.propTypes = {
  actvity: PropTypes.shape({
    accountName: PropTypes.string,
    action: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    _id: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.date,
  }).isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default ActivityFeedTab;
