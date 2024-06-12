import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Login } from './pages/Login/Login';

export const App = () => {
  const [user, setUser] = useState('');
  const handleLogin = username => {
    setUser(username);
  };
  const handleLogout = () => setUser('');

  if (!user) {
    return <Login handleLogin={handleLogin} />;
  }

  return (
    <>
      <Header logout={handleLogout} user={user} />
    </>
  );
};
export default App;
