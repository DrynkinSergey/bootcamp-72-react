import { counterReducer } from './counter/slice';
import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todolist/slice';
import { filterReducer } from './filterSlice';
import { todoApi } from './todoApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { blogReducer } from './blogSlice';

export const store = configureStore({
  reducer: {
    todolist: todosReducer,
    counter: counterReducer,
    blog: blogReducer,
    filter: filterReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(todoApi.middleware),
});

setupListeners(store.dispatch);
