import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Login } from './pages/Login/Login';
import { Articles } from './pages/Articles/Articles';
import { AddArticle } from './pages/AddAritcle/AddArticle';

export const App = () => {
  const [user, setUser] = useState(() => window.localStorage.getItem('username') || '');
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: 'Learn JAVASCRIPT',
      body: 'If you want to learn js you should learn it',
      author: 'John Dou',
    },
    {
      id: 2,
      title: 'Be happy',
      body: 'Dont worry',
      author: 'Jane Dou',
    },
  ]);
  const [page, setPage] = useState('home');

  const deleteArticle = id => {
    setArticles(prev => prev.filter(item => item.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem('username', user);
  }, [user]);

  const handleLogin = username => {
    setUser(username);
  };
  const handleLogout = () => setUser('');

  if (!user) {
    return <Login handleLogin={handleLogin} />;
  }

  return (
    <>
      <Header setPage={setPage} logout={handleLogout} user={user} />
      {page === 'home' && <Articles articles={articles} deleteArticle={deleteArticle} />}
      {page === 'addArticle' && <AddArticle />}
    </>
  );
};
export default App;
