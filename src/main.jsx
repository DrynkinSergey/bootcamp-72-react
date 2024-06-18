import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import 'modern-normalize';
import { Toaster } from 'react-hot-toast';
import { ContextProvider } from './context/ContextProvider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
    <Toaster position='top-right' autoClose={1500} reverseOrder={false} />
  </ContextProvider>
);
