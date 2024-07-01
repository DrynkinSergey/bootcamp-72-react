import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from './categories/slice';

const rootReducer = combineReducers({
  categories: categoriesReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
