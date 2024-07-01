import { useSelector } from 'react-redux';
import { Transaction } from './Transaction';
import { selectTransactions } from '../../redux/transactions/slice';

export const List = () => {
  const transactions = useSelector(selectTransactions);
  return (
    <table className='table text-2xl w-3/4 mx-auto'>
      <thead className='text-2xl font-bold'>
        <tr>
          <th>Date</th>
          <th>Comment</th>
          <th>Sum</th>
          <th>Type</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};
