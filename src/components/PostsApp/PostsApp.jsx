import { useEffect, useState } from 'react';
import { getPosts } from '../../services/api';
import s from './PostsApp.module.scss';
import { List } from './List';
import { SearchBar } from './SearchBar';
import { Loader } from './Loader';
export const PostsApp = () => {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { posts } = await getPosts({ skip });
        setPosts(prev => [...prev, ...posts]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
    //IIFE =  Immediate Invoked Function Expression
  }, [skip]);

  return (
    <div className={s.wrapper}>
      <SearchBar />
      <List posts={posts} />
      {isLoading && <Loader />}
      {error && <div>Something went wrong</div>}
      {!isLoading && (
        <div className={s.loadMore}>
          <button className='btn' onClick={() => setSkip(prev => prev + 6)}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
};
