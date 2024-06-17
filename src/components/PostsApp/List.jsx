import { SinglePost } from './SinglePost';
import s from './PostsApp.module.scss';
export const List = ({ posts = [], openPostsDetails }) => {
  return (
    <ul className={s.list}>
      {posts.map(item => (
        <SinglePost openPostsDetails={openPostsDetails} key={item.id} item={item} />
      ))}
    </ul>
  );
};
