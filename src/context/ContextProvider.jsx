import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState('Alex');
  const login = username => setUser(username);
  const logout = () => setUser(null);

  const contextValue = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
