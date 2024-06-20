import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchUsersById } from '../services/api';
import { useHttp } from '../hooks/useHttp';

export const SingleUser = () => {
  const { userId } = useParams();
  const { data: user } = useHttp(fetchUsersById, userId);
  if (!user) return <h2> Loading...</h2>;

  return (
    <div>
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
