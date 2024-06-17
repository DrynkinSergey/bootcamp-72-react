import { SinglePost } from './SinglePost';
import s from './PostsApp.module.scss';
export const List = ({ posts = [] }) => {
  return (
    <ul className={s.list}>
      {posts.map(item => (
        <SinglePost key={item.id} item={item} />
      ))}
    </ul>
  );
};
