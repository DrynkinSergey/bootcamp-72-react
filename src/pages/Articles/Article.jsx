import s from './Articles.module.css';
export const Article = ({ id, title, body, author, deleteArticle }) => {
  return (
    <li className={s.card}>
      <h3>{title}</h3>
      <p className={s.body}>{body}</p>
      <p className={s.author}>{author}</p>
      <div className={s.buttons}>
        <button className='btn'>Like</button>
        <button className='btn'>Show</button>
        <button className='btn' onClick={() => deleteArticle(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};
