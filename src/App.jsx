import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Trello } from './pages/Trello';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PrivateRoute } from './routes/PrivateRoute';

export const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Trello />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
};
