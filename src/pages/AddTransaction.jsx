import toast from 'react-hot-toast';
import { TransactionForm } from '../components/Transactions/TransactionForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTransactionThunk } from '../redux/transactions/operations';
import { useState } from 'react';

export const AddTransaction = () => {
  const [startDate, setStartDate] = useState(new Date());
  const initialValues = {
    comment: '',
    sum: 0,
    type: 'expense',
    category: '',
    author: 'Alex',
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    dispatch(addTransactionThunk({ ...values, createdAt: startDate }))
      .unwrap()
      .then(() => {
        navigate('/dashboard');
      })
      .catch(() => {
        toast.error('Some error!');
      });

    options.resetForm();
  };
  return (
    <div>
      <TransactionForm
        startDate={startDate}
        setStartDate={setStartDate}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
