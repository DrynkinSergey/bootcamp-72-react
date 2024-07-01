import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from './categories/slice';
import { transactionsReducer } from './transactions/slice';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  transactions: transactionsReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
