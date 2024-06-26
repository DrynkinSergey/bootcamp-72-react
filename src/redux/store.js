import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { columnsReducer } from './columns/slice';
import { tasksReducer } from './tasks/slice';
import { authReducer } from './auth/slice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'extra_2',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  columns: columnsReducer,
  tasks: tasksReducer,
  auth: authReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
