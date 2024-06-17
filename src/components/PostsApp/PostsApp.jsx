import { useEffect, useState } from 'react';
import { getPosts, getPostsByQuery } from '../../services/api';
import s from './PostsApp.module.scss';
import { List } from './List';
import { SearchBar } from './SearchBar';
import { Loader } from './Loader';
import Modal from '../Modal/Modal';
import { SkeletonCard } from '../Skeleton/SkeletonCard';
export const PostsApp = () => {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [total, setTotal] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
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

  const toggleModal = () => setIsOpen(prev => !prev);
  const openPostsDetails = post => {
    toggleModal();
    setModalContent(post);
  };
  const handleSetQuery = query => {
    setQuery(query);
    setPosts([]);
    setSkip(0);
  };

  return (
    <div className={s.wrapper}>
      <SearchBar setQuery={handleSetQuery} />
      {query && <h2>Search query: {query}</h2>}

      <List openPostsDetails={openPostsDetails} posts={posts} isLoading={isLoading} />

      {error && <div>Something went wrong</div>}
      {!isLoading && !posts.length && <div>By query `{query}` not found posts</div>}
      {!isLoading && posts.length < total && (
        <div className={s.loadMore}>
          <button className='btn' onClick={() => setSkip(prev => prev + 6)}>
            Load more
          </button>
        </div>
      )}

      {isOpen && (
        <Modal title={modalContent.title} onClose={toggleModal}>
          <p>{modalContent.body}</p>
          <ul className={s.list}>
            {modalContent.tags.map(tag => (
              <li className={s.item} key={tag}>
                {tag}
              </li>
            ))}
          </ul>
          <div>
            <p>Likes: {modalContent.reactions.likes}</p>
            <p>Dislikes: {modalContent.reactions.dislikes}</p>
          </div>
          <p>Views: {modalContent.views}</p>
        </Modal>
      )}
    </div>
  );
};
