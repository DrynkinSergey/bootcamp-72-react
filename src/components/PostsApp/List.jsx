import { SinglePost } from './SinglePost';
import s from './PostsApp.module.scss';
import { SkeletonCard } from '../Skeleton/SkeletonCard';
export const List = ({ posts = [], openPostsDetails, isLoading }) => {
  return (
    <ul className={s.list}>
      {posts.map(item => (
        <SinglePost openPostsDetails={openPostsDetails} key={item.id} item={item} />
      ))}
      {isLoading &&
        Array(6)
          .fill('')
          .map((_, index) => <SkeletonCard key={index} />)}
    </ul>
  );
};
