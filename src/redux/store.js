import { configureStore } from '@reduxjs/toolkit';
import { columnsReducer } from './columns/slice';

export const store = configureStore({
  reducer: {
    columns: columnsReducer,
  },
});
