import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectBalance, selectTransactionsInfo } from '../../redux/transactions/slice';

export const DashboardInfo = () => {
  const balance = useSelector(selectBalance);

  const transactionInfo = useSelector(selectTransactionsInfo);
  console.log(transactionInfo);
  return (
    <div
      className='grid grid-cols-3
     gap-5'
    >
      <span
        className={clsx(
          'p-10 block mt-2  rounded-2xl bg-slate-800  text-3xl font-bold',
          balance < 0 ? 'text-red-500' : 'text-green-500'
        )}
      >
        Balance:{balance} USD
      </span>
      <span className={clsx('p-10 block mt-2 rounded-2xl bg-slate-800  text-3xl font-bold', 'text-green-500')}>
        Total Incomes:{transactionInfo.incomes} USD
      </span>
      <span className={clsx('p-10 block mt-2 rounded-2xl bg-slate-800  text-3xl font-bold ', 'text-red-500')}>
        Total Expenses:{transactionInfo.expenses} USD
      </span>
    </div>
  );
};
