import { formatDistanceToNow } from 'date-fns';
import { cutText } from '../../helpers/cutText';
import s from './Articles.module.css';
import { FaStar } from 'react-icons/fa';
import { Rating } from '@mui/material';

export const Article = ({
  user,
  id,
  setNewRating,
  rating = 0,
  title,
  body,
  author,
  liked = false,
  date,
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
      <p className={s.author}>{formatDistanceToNow(date, { addSuffix: true })}</p>
      <ul className={s.tags}>
        {tags.map(tag => (
          <li className={s.tag} key={tag}>
            {tag}
          </li>
        ))}
      </ul>
      <Rating
        name='size-large'
        defaultValue={rating}
        max={10}
        onChange={(e, value) => setNewRating(id, value)}
        size='large'
      />
      <div className={s.buttons}>
        {user !== author && (
          <button onClick={() => handleChangeLike(id)} className='btn'>
            Like
          </button>
        )}
        <button onClick={() => openModal({ id, title, body, author, tags })} className='btn'>
          Show
        </button>
        {user === author && (
          <button className='btn' onClick={() => deleteArticle(id)}>
            Delete
          </button>
        )}
      </div>
    </li>
  );
};
