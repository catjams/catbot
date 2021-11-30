import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class Analytics extends React.Component {

  render() {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: 'Number of Intents',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    return (
        <Pie data={data}/>
    );
  }
}

// Require a document to be passed to this component.
Analytics.propTypes = {
  intents: PropTypes.array.isRequired,
};

export default Analytics;
