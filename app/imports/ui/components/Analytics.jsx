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
          text: 'Chart.js Horizontal Bar Chart',
        },
      },
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [12, 19, 3, 5, 2, 3],
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
};

export default Analytics;
