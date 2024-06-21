import { Link, NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { fetchUsersById } from '../services/api';
import { useHttp } from '../hooks/useHttp';
import { useEffect } from 'react';

export const SingleUser = () => {
  const { userId } = useParams();
  const { data: user } = useHttp(fetchUsersById, userId);
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/about');
  //   }, 2000);
  // }, [navigate]);

  if (!user) return <h2> Loading...</h2>;
  return (
    <div>
      <button className='btn' onClick={() => navigate('/users', { replace: true })}>
        Go back
      </button>
      <Link to='/users'>Go Back</Link>
      <img src={user.image} alt={user.firstName} />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>
        Address: {user.address.state} {user.address.city} {user.address.address}
      </p>
      <nav className='flex justify-center bg-red-500'>
        <ul className='flex gap-10'>
          <li>
            <NavLink to='info'>Show info by User</NavLink>
          </li>
          <li>
            <NavLink to='posts'>Show Posts</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
export default SingleUser;
