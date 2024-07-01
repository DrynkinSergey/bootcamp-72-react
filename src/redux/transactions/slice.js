import { createSlice } from '@reduxjs/toolkit';
import { addTransactionThunk, fetchTransactionsThunk } from './operations';

const initialState = {
  transactions: [
    {
      id: 1,
      comment: 'Salary',
      sum: 120000,
      type: 'income',
      category: 'Salary',
      createdAt: new Date(),
      author: 'Alex',
    },
  ],
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
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTransactionsThunk.fulfilled, (state, action) => {
        state.transactions = action.payload;
      })
      .addCase(addTransactionThunk.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
      });
  },
});

export const transactionsReducer = slice.reducer;
export const { selectError, selectIsLoading, selectTransactions } = slice.selectors;
