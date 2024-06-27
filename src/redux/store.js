import { counterReducer } from './counter/slice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todolist/slice';
import { filterReducer } from './filterSlice';
import logger from 'redux-logger';
import toast from 'react-hot-toast';
const persistConfig = {
  key: 'todos',
  version: 1,
  storage,
};
const checkCountry = store => next => action => {
  if (action.payload?.todo === 'test') {
    toast.error('Sorry, but you cant write anything!');
    return;
  }
  next(action);
};

const myMiddleware = store => next => action => {
  // console.log(action);
  if (action.payload?.todo === 'angular') {
    toast('Angular detected');
    setTimeout(() => {
      action.payload.todo = 'REACT';
      toast('Angular replaced to React');
      next(action);
    }, 2000);
  } else {
    next(action);
  }
};

const persistedReducer = persistReducer(persistConfig, todosReducer);
export const store = configureStore({
  reducer: {
    todolist: persistedReducer,
    counter: counterReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(checkCountry, myMiddleware),
});

export const persistor = persistStore(store);
