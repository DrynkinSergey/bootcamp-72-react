import { createSelector, createSlice } from '@reduxjs/toolkit';
import {
  addTransactionThunk,
  deleteTransactionThunk,
  editTransactionThunk,
  fetchTransactionsThunk,
} from './operations';

const initialState = {
  transactions: [],
  error: false,
  isLoading: false,
};

const slice = createSlice({
  name: 'transactions',
  initialState,
  selectors: {
    selectTransactions: state => state.transactions,
    selectError: state => state.error,
    selectIsLoading: state => state.isLoading,
    selectBalance: state =>
      state.transactions.reduce(
        (balance, transaction) =>
          transaction.type === 'income' ? balance + transaction.sum : balance - transaction.sum,
        0
      ),
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTransactionsThunk.fulfilled, (state, action) => {
        state.transactions = action.payload;
      })
      .addCase(addTransactionThunk.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, action) => {
        state.transactions = state.transactions.filter(transaction => transaction.id !== action.payload);
      })
      .addCase(editTransactionThunk.fulfilled, (state, action) => {
        state.transactions = state.transactions.map(item =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        );
      });
  },
});

export const transactionsReducer = slice.reducer;
export const { selectError, selectIsLoading, selectTransactions, selectBalance } = slice.selectors;

export const selectTransactionsInfo = createSelector([slice.selectors.selectTransactions], transactions => {
  return transactions.reduce(
    (total, transaction) => {
      return transaction.type === 'income'
        ? { ...total, incomes: total.incomes + transaction.sum }
        : { ...total, expenses: total.expenses + transaction.sum };
    },
    { incomes: 0, expenses: 0 }
  );
});
