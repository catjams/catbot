import React from 'react';
import { Grid } from 'semantic-ui-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class Analytics extends React.Component {

  render() {
    console.log(this.props.intentLabels);
    console.log(this.props.numbers);
    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend,
    );
    const options = {
      indexAxis: 'y',
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: `Intents Distribution (${this.props.intentLabels.length})`,
        },
      },
    };
    const labels = this.props.intentLabels;

    const data = {
      labels,
      datasets: [
        {
          label: 'Bot intents',
          data: this.props.numbers,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
    return (
      <Bar data={data} options={options}/>
    );
  }
}

// Require a document to be passed to this component.
Analytics.propTypes = {
  intentLabels: PropTypes.array.isRequired,
  numbers: PropTypes.array.isRequired,
};

export default Analytics;
