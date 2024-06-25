import { counterReducer } from './counter/slice';

import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todolist/slice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    counter: counterReducer,
  },
});
