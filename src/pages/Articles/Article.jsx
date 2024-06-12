import s from './Articles.module.css';
export const Article = ({ id, title, body, author, deleteArticle, tags = [] }) => {
  return (
    <li className={s.card}>
      <h3>{title}</h3>
      <p className={s.body}>{body}</p>
      <p className={s.author}>{author}</p>
      <ul className={s.tags}>
        {tags.map(tag => (
          <li className={s.tag} key={tag}>
            {tag}
          </li>
        ))}
      </ul>
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
