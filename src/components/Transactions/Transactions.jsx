import { useDispatch } from 'react-redux';
import { List } from './List';
import { useEffect } from 'react';
import { fetchTransactionsThunk } from '../../redux/transactions/operations';

export const Transactions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactionsThunk());
  }, [dispatch]);
  return (
    <>
      <List />
    </>
  );
};
