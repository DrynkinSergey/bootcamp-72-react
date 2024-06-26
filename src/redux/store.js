import { configureStore } from '@reduxjs/toolkit';
import { columnsReducer } from './columns/slice';
import { tasksReducer } from './tasks/slice';

export const store = configureStore({
  reducer: {
    columns: columnsReducer,
    tasks: tasksReducer,
  },
});
