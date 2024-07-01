import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className='px-4'>
        <Outlet />
      </div>
    </div>
  );
};
