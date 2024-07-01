import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  income: ['salary', 'bonus', 'freelance', 'other'],
  expense: ['home', 'education', 'car', 'food', 'transport', 'clothes', 'health', 'other'],
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
