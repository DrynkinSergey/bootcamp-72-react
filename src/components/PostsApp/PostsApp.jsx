import { useEffect, useState } from 'react';
import { getPosts } from '../../services/api';
import s from './PostsApp.module.scss';
import { List } from './List';
import { SearchBar } from './SearchBar';
export const PostsApp = () => {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const { posts } = await getPosts({ skip });
      setPosts(prev => [...prev, ...posts]);
    };
    getData();
    //IIFE =  Immediate Invoked Function Expression
  }, [skip]);

  return (
    <div>
      <SearchBar />
      <List posts={posts} />
      <div className={s.loadMore}>
        <button className='btn' onClick={() => setSkip(prev => prev + 6)}>
          Load more
        </button>
      </div>
    </div>
  );
};
