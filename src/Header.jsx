import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && 'activeNavLink');
  };
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
        <NavLink className={buildLinkClass} to='/users'>
          Users
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
