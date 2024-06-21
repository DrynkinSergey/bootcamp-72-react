import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchPostsByUserId } from '../../services/api';
import Modal from '../Modal/Modal';
import { useToggle } from '../../hooks/useToggle';
import { useHttp } from '../../hooks/useHttp';
import { Suspense } from 'react';
import { DNA } from 'react-loader-spinner';

export const PostsByUser = () => {
  const { userId } = useParams();
  const { data: posts } = useHttp(fetchPostsByUserId, userId);

  const { isOpen, close, open } = useToggle();
  return (
    <div className='grid grid-cols-2 gap-4'>
      <section>
        <h1 className='text-center'>PostsByUser</h1>
        <button onClick={open}> Show modal</button>
        <ul>
          {posts?.map((post, idx) => (
            <li className='font-bold italic' key={post.id}>
              <Link to={post.id.toString()}>
                {idx + 1}. {post.title}
              </Link>
            </li>
          ))}
        </ul>
        {isOpen && (
          <Modal onClose={close}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cumque velit animi nulla, quod ratione
            accusamus inventore veritatis vitae voluptatum aspernatur voluptatibus magnam cum aliquid id est ullam
            pariatur beatae?
          </Modal>
        )}
      </section>

      <Suspense
        fallback={
          <DNA
            visible={true}
            height='80'
            width='80'
            ariaLabel='dna-loading'
            wrapperStyle={{}}
            wrapperClass='dna-wrapper'
          />
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
export default PostsByUser;
