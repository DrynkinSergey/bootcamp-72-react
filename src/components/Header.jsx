import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='px-8 py-4 font-bold text-white bg-slate-800 flex justify-between '>
      <h2>Auth</h2>
      <ul className='flex gap-5'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/todos'>Todos</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/register'>Register</NavLink>
        </li>
      </ul>
    </header>
  );
};
