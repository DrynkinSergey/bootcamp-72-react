import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './context/AuthProvider';
import { useContext } from 'react';

export const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && 'activeNavLink');
  };
  const { logout } = useContext(AuthContext);
  return (
    <header className='px-5 py-4 text-2xl flex justify-between items-center text-white bg-teal-500 font-bold'>
      <h1>React Router</h1>
      <nav className='flex gap-4'>
        <NavLink className={buildLinkClass} to='/'>
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to='/about'>
          About
        </NavLink>
        <NavLink className={buildLinkClass} to='/recipes'>
          Recipes
        </NavLink>
        <NavLink className={buildLinkClass} to='/users'>
          Users
        </NavLink>
        <NavLink className={buildLinkClass} to='/login'>
          Login
        </NavLink>
        <button onClick={logout}>Logout</button>
      </nav>
    </header>
  );
};
export default Header;
