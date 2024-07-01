import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <header className='py-4 px-8 flex justify-between font-bold bg-slate-800 text-white'>
      <h2>Transactions</h2>
      <ul className='flex gap-4'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/dashboard'>Dashbord</NavLink>
        </li>
      </ul>
    </header>
  );
};
