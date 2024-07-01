import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  income: [],
  expense: [],
};

const slice = createSlice({
  name: 'categories',
  initialState,
  selectors: {
    selectIncome: state => state.income,
    selectExpense: state => state.expense,
  },
});

export const { selectIncome, selectExpense } = slice.selectors;
export const categoriesReducer = slice.reducer;
