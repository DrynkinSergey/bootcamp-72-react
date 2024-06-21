import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className='p-5 '>
        <Suspense fallback='Loading...'>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
