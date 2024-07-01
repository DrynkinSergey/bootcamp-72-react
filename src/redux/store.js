import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todolist/slice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    todolist: todosReducer,
    filter: filterReducer,
  },
});
