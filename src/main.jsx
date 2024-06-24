import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <Toaster position='top-right' autoClose={1500} reverseOrder={false} />
  </Provider>
);
