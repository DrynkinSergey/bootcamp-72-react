import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Todos } from './pages/Todos';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from './redux/auth/operations';
import { useEffect } from 'react';
import { selectIsRefresh } from './redux/auth/slice';

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefresh ? (
    <div className='min-h-screen flex flex-col justify-center items-center bg-slate-800'>
      <span className='loading loading-ball loading-lg text-white'></span>
      <h2 className='text-white'>Loading...</h2>
    </div>
  ) : (
    <Routes>
      <Route
        path='/'
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path='todos' element={<Todos />} />
      </Route>
      <Route
        path='/login'
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path='/register'
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
    </Routes>
  );
};
// https://task-manager-api.goit.global/
