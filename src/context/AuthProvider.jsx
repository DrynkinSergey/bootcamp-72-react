import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const login = name => setUser(name);

  const logout = () => setUser('');

  const contextValue = {
    user,
    login,
    logout,
  };
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
