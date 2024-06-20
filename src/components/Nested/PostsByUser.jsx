import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchPostsByUserId } from '../../services/api';

export const PostsByUser = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPostsByUserId(userId);
      setPosts(data);
    };
    getPosts();
  }, [userId]);
  return (
    <div className='grid grid-cols-2 gap-4'>
      <section>
        <h1 className='text-center'>PostsByUser</h1>
        <ul>
          {posts?.map((post, idx) => (
            <li className='font-bold italic' key={post.id}>
              <Link to={post.id.toString()}>
                {idx + 1}. {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Outlet />
    </div>
  );
};
export default PostsByUser;
