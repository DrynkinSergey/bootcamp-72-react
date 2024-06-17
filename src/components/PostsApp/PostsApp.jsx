import { useEffect, useState } from 'react';
import { getPosts, getPostsByQuery } from '../../services/api';
import s from './PostsApp.module.scss';
import { List } from './List';
import { SearchBar } from './SearchBar';
import { Loader } from './Loader';
export const PostsApp = () => {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { posts, total } = query ? await getPostsByQuery({ q: query, skip }) : await getPosts({ skip });
        setPosts(prev => [...prev, ...posts]);
        setTotal(total);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
    //IIFE =  Immediate Invoked Function Expression
  }, [skip, query]);

  const handleSetQuery = query => {
    setQuery(query);
    setPosts([]);
    setSkip(0);
  };

  return (
    <div className={s.wrapper}>
      <SearchBar setQuery={handleSetQuery} />
      {query && <h2>Search query: {query}</h2>}

      <List posts={posts} />

      {isLoading && <Loader />}
      {error && <div>Something went wrong</div>}
      {!isLoading && !posts.length && <div>By query `{query}` not found posts</div>}
      {!isLoading && posts.length < total && (
        <div className={s.loadMore}>
          <button className='btn' onClick={() => setSkip(prev => prev + 6)}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
};
