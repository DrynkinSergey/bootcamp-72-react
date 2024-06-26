import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar bg-primary text-primary-content flex justify-between items-center px-8'>
      <button className='btn btn-ghost text-xl'>Trello</button>
      <ul className='space-x-4'>
        <li>
          <NavLink to='/'>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to='/profile'>Profile</NavLink>
        </li>
      </ul>
    </div>
  );
};
