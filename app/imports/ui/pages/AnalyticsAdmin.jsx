import React from 'react';
import { Tab } from 'semantic-ui-react';
import UserStatsTab from '../components/UserStatsTab';
import UserInputsTab from '../components/UserInputsTab';
import UserRatingsTab from '../components/UserRatingsTab';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class AnalyticsAdmin extends React.Component {

  render() {

    const panes = [
      {
        menuItem: 'User Statistics',
        render: () => <Tab.Pane attached={false}>
          <UserStatsTab/>
        </Tab.Pane>,
      },
      {
        menuItem: 'User Responses',
        render: () => <Tab.Pane attached={false}>
          <UserInputsTab/>
        </Tab.Pane>,
      },
      {
        menuItem: 'User Ratings',
        render: () => <Tab.Pane attached={false}>
          <UserRatingsTab/>
        </Tab.Pane>,
      },
    ];

    return (
      <Tab id='analytics-page' menu={{ secondary: true, pointing: true }} panes={panes} />
    );
  }
}

export default AnalyticsAdmin;
