import { Article } from './Article';
import s from './Articles.module.css';
export const List = ({ articles = [], deleteArticle }) => {
  return (
    <ul className={s.list}>
      {articles.map(article => (
        <Article key={article.id} {...article} deleteArticle={deleteArticle} />
      ))}
    </ul>
  );
};
