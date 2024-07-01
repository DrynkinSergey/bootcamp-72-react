import clsx from 'clsx';
import { Pencil, Trash2 } from 'lucide-react';
import moment from 'moment/moment';

export const Transaction = ({ transaction }) => {
  const { comment, sum, type, category, createdAt } = transaction;

  return (
    <tr className={clsx(type === 'income' ? 'text-green-500' : 'text-red-500')}>
      <td>{moment(createdAt).format('DD.MM.YYYY')}</td>
      <td>{comment}</td>
      <td>{sum}</td>
      <td>{type}</td>
      <td>{category}</td>
      <td className='flex gap-4'>
        <button>
          <Pencil />
        </button>
        <button>
          <Trash2 />
        </button>
      </td>
    </tr>
  );
};
