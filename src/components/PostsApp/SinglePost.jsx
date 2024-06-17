import { cutText } from '../../helpers/cutText';
import s from './PostsApp.module.scss';
export const SinglePost = ({ item }) => {
  const { id, body, title } = item;
  return (
    <li className={s.item}>
      <h3>{title}</h3>
      <p>{cutText(body)}</p>
    </li>
  );
};
