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
  const [filter, setFilter] = useState('all');

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
  const filteredData = getFilteredData();
  const sortData = () => {
    switch (filter) {
      case 'newest': {
        return filteredData.sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
      }

      case 'oldest':
        return filteredData.toSorted((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      case 'liked':
        return filteredData.filter(item => item.liked);
      default:
        return articles;
    }
  };

  const setNewRating = (id, newRating) => {
    setArticles(prev => prev.map(item => (item.id === id ? { ...item, rating: newRating } : item)));
  };
  return (
    <>
      <Header setPage={setPage} logout={handleLogout} user={user} />
      {page === 'home' && (
        <Articles
          filter={filter}
          setFilter={setFilter}
          articles={sortData()}
          searchStr={searchStr}
          user={user}
          deleteArticle={deleteArticle}
          setSearchStr={setSearchStr}
          setNewRating={setNewRating}
          handleChangeLike={handleChangeLike}
        />
      )}
      {page === 'addArticle' && <AddArticle addArticle={addArticle} setPage={setPage} />}
    </>
  );
};
export default App;
