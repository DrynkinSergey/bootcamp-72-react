import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Login } from './pages/Login/Login';
import { Articles } from './pages/Articles/Articles';
import { AddArticle } from './pages/AddAritcle/AddArticle';
import { nanoid } from 'nanoid';

export const App = () => {
  const [user, setUser] = useState(() => window.localStorage.getItem('username') || '');
  const [articles, setArticles] = useState(() => {
    const savedArticles = JSON.parse(window.localStorage.getItem('articles'));
    if (savedArticles?.length) {
      return savedArticles;
    }
    return [];
  });
  const [page, setPage] = useState('home');
  const [searchStr, setSearchStr] = useState('');

  const deleteArticle = id => {
    setArticles(prev => prev.filter(item => item.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem('articles', JSON.stringify(articles));
  }, [articles]);
  useEffect(() => {
    window.localStorage.setItem('username', user);
  }, [user]);

  const handleLogin = username => {
    setUser(username);
  };
  const handleLogout = () => setUser('');

  const addArticle = article => {
    const newArticle = {
      ...article,
      tags: article.tags.split(',').map(tag => tag.trim()),
      id: nanoid(),
      author: user,
      date: new Date(),
      liked: false,
    };

    setArticles(prev => [...prev, newArticle]);
  };

  if (!user) {
    return <Login handleLogin={handleLogin} />;
  }

  const getFilteredData = () => {
    return articles.filter(item => item.title.toLowerCase().includes(searchStr.toLowerCase()));
  };

  const handleChangeLike = id => {
    setArticles(prev => prev.map(item => (item.id === id ? { ...item, liked: !item.liked } : item)));
  };

  return (
    <>
      <Header setPage={setPage} logout={handleLogout} user={user} />
      {page === 'home' && (
        <Articles
          articles={getFilteredData()}
          searchStr={searchStr}
          deleteArticle={deleteArticle}
          setSearchStr={setSearchStr}
          handleChangeLike={handleChangeLike}
        />
      )}
      {page === 'addArticle' && <AddArticle addArticle={addArticle} setPage={setPage} />}
    </>
  );
};
export default App;
