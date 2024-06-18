import { cutText } from '../../helpers/cutText';
import s from './PostsApp.module.scss';
export const SinglePost = ({ auto, item, openPostsDetails }) => {
  const { id, body, title } = item;
  return (
    <li onClick={() => openPostsDetails(item)} className={s.item}>
      <h3>{title}</h3>
      <p>{cutText(body)}</p>
      <p>{auto}</p>
    </li>
  );
};
