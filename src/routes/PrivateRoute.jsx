import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/slice';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? children : <Navigate to='login' />;
};
