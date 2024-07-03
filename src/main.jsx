import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />

        <Toaster position='top-right' autoClose={1500} reverseOrder={false} />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
