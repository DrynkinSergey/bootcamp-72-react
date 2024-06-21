import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
      <Toaster position='top-right' autoClose={1500} reverseOrder={false} />
    </AuthProvider>
  </BrowserRouter>
);
