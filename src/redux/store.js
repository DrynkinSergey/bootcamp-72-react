import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todolist/slice';
import { filterReducer } from './filterSlice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    todolist: todosReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
