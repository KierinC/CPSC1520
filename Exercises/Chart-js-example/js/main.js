import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from 'chart.js/auto';
import { budget } from './budget-data';

const labels = [
    'Food',
    'Entertainment',
    'Utilities',
    'Transportation',
    'Miscellaneous',
];

const data = {
    labels, // don't have to instatiate property if name is the same as variable
    datasets: [{
        label: '$/month',
        barThickness: 45,
        maxBarThickness: 45,
        minBarLength: 4,
        data: budget,
    }],
};


const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

const ctx = document.querySelector('#budget-chart');
new Chart(ctx, config);