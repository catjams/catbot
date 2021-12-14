import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class AnalyticsTwo extends React.Component {
  render() {
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend,
    );

    const options = {
      responsive: true,
      plugins: {
        legend: {

        },
        title: {
          display: true,
          text: 'Intents Per Day Graph',
        },
      },
    };
    const labels = this.props.dateLabels;
    const data = {
      labels,
      datasets: [
        {
          label: 'Number of intents',
          data: this.props.numbers,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
    return (
      <Line options={options} data={data} />
    );
  }
}

// Require a document to be passed to this component.
AnalyticsTwo.propTypes = {
  dateLabels: PropTypes.array.isRequired,
  numbers: PropTypes.array.isRequired,
};

export default AnalyticsTwo;
