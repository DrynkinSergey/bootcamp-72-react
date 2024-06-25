import { counterReducer } from './counter/slice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todolist/slice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'todos',
  version: 1,
  storage,
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
    }),
});

export const persistor = persistStore(store);
