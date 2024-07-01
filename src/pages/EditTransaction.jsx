import toast from 'react-hot-toast';
import { TransactionForm } from '../components/Transactions/TransactionForm';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { editTransactionThunk } from '../redux/transactions/operations';

export const EditTransaction = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { transactionId } = useParams();
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    axios.get(`transactions/${transactionId}`).then(res => setTransaction(res.data));
  }, [transactionId]);

  const initialValues = {
    ...transaction,
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    dispatch(editTransactionThunk({ ...values, createdAt: startDate }))
      .unwrap()
      .then(() => {
        navigate('/dashboard');
      })
      .catch(() => {
        toast.error('Some error!');
      });
    console.log(values);

    options.resetForm();
  };
  if (!transaction) return <div>Loading...</div>;
  return (
    <div>
      <TransactionForm
        startDate={transaction?.createdAt ? new Date(transaction.createdAt) : startDate}
        setStartDate={setStartDate}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
