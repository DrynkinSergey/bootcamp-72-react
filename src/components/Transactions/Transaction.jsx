import clsx from 'clsx';
import { Pencil, Trash2 } from 'lucide-react';
import moment from 'moment/moment';
import { useDispatch } from 'react-redux';
import { deleteTransactionThunk } from '../../redux/transactions/operations';
import { useNavigate } from 'react-router-dom';

export const Transaction = ({ transaction }) => {
  const { comment, sum, type, category, createdAt } = transaction;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <tr className={clsx(type === 'income' ? 'text-green-500' : 'text-red-500')}>
      <td>{moment(createdAt).format('DD.MM.YYYY')}</td>
      <td>{comment}</td>
      <td>{sum}</td>
      <td>{type}</td>
      <td>{category}</td>
      <td className='flex gap-4'>
        <button onClick={() => navigate(`/edit/${transaction.id}`)}>
          <Pencil />
        </button>
        <button onClick={() => dispatch(deleteTransactionThunk(transaction.id))}>
          <Trash2 />
        </button>
      </td>
    </tr>
  );
};
