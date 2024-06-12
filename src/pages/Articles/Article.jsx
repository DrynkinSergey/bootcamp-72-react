import { cutText } from '../../helpers/cutText';
import s from './Articles.module.css';
import { FaStar } from 'react-icons/fa';

export const Article = ({
  id,
  title,
  body,
  author,
  liked = false,
  tags = [],
  deleteArticle,
  handleChangeLike,
  openModal,
}) => {
  return (
    <li className={s.card}>
      {liked && <FaStar color='gold' className={s.starIcon} />}
      <h3>{title}</h3>
      <p className={s.body}>{cutText(body, 70)}</p>
      <p className={s.author}>{author}</p>
      <ul className={s.tags}>
        {tags.map(tag => (
          <li className={s.tag} key={tag}>
            {tag}
          </li>
        ))}
      </ul>
      <div className={s.buttons}>
        <button onClick={() => handleChangeLike(id)} className='btn'>
          Like
        </button>
        <button onClick={() => openModal({ id, title, body, author, tags })} className='btn'>
          Show
        </button>
        <button className='btn' onClick={() => deleteArticle(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};
