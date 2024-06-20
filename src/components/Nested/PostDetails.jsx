import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../../services/api';

export const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const getPost = async () => {
      const data = await fetchPostById(postId);
      setPost(data);
    };
    getPost();
  }, [postId]);

  if (!post) return <h2>Loading...</h2>;
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>{post.views}</p>
    </div>
  );
};
export default PostDetails;
