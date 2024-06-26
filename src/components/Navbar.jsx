import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout, selectUser } from '../redux/auth/slice';

export const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className='navbar bg-primary text-primary-content flex justify-between items-center px-8'>
      <button className='btn btn-ghost text-xl'>Trello</button>
      <h2>{user.email}</h2>
      <ul className='space-x-4'>
        <li>
          <NavLink to='/'>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to='/profile'>Profile</NavLink>
        </li>
        <button onClick={() => dispatch(logout())} className='btn btn-secondary'>
          LOGOUT
        </button>
      </ul>
    </div>
  );
};
