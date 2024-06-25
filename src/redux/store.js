import { counterReducer } from './counter/reducer';
import { todosReducer } from './todolist/reducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    counter: counterReducer,
  },
});
