import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = true;
  return isLoggedIn ? children : <Navigate to='/login' />;
};
