import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/slice';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to='/' replace /> : children;
};
