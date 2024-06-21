import { useParams } from 'react-router-dom';
import { fetchPostById } from '../../services/api';
import { useHttp } from '../../hooks/useHttp';

export const PostDetails = () => {
  const { postId } = useParams();
  const { data: post, isLoading, isError } = useHttp(fetchPostById, postId);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error</h2>;
  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <p>{post?.views}</p>
    </div>
  );
};
export default PostDetails;
