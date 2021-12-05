import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class AnalyticsTwo extends React.Component {

  render() {
    ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    const data = {
      datasets: [
        {
          label: 'A dataset',
          data: Array.from({ length: 100 }, () => ({
            x: this.props.dateLabels,
            y: this.props.numbers,
          })),
          backgroundColor: 'rgba(255, 99, 132, 1)',
        },
      ],
    };
    return (
      <Scatter options={options} data={data} />
    );
  }
}

// Require a document to be passed to this component.
AnalyticsTwo.propTypes = {
  dateLabels: PropTypes.array.isRequired,
  numbers: PropTypes.array.isRequired,
};

export default AnalyticsTwo;
