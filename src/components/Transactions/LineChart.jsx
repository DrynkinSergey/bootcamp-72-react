import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectTransactions } from '../../redux/transactions/slice';
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
import Chart from 'chart.js/auto';
import moment from 'moment';
export const LineChart = () => {
  const transactions = useSelector(selectTransactions);
  const sums = transactions.map(transaction => transaction.sum);
  const dates = transactions.map(transaction => moment(transaction.createdAt).format('DD.MM.YYYY'));
  const data = {
    labels: dates,
    datasets: [
      {
        label: 'First dataset',
        data: sums,
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
  return (
    <div>
      <Line data={data} />
    </div>
  );
};
