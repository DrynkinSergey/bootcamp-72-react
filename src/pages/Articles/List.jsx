import { useState } from 'react';
import { Article } from './Article';
import s from './Articles.module.css';
import Modal from '../../components/Modal/Modal';
export const List = ({ articles = [], user, deleteArticle, handleChangeLike }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);
  const openModal = item => {
    setIsOpen(true);
    setContent(item);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <ul className={s.list}>
        {articles.map(article => (
          <Article
            user={user}
            key={article.id}
            openModal={openModal}
            {...article}
            handleChangeLike={handleChangeLike}
            deleteArticle={deleteArticle}
          />
        ))}
      </ul>
      {isOpen && (
        <Modal title={content.title} onClose={closeModal}>
          <p>{content.body}</p>
          <p>{content.author}</p>
          <ul>
            {content.tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </Modal>
      )}
    </>
  );
};
