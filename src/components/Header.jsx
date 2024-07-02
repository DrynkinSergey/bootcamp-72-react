import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from '../redux/auth/slice';

export const Header = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className='px-8 py-4 font-bold text-white bg-slate-800 flex justify-between items-center  '>
      <h2>Auth</h2>
      <h2>{user.email}</h2>
      <ul className='flex gap-5 items-center'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/todos'>Todos</NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink to='/register'>Register</NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <li>
            <button className='btn btn-primary'>Logout</button>
          </li>
        )}
      </ul>
    </header>
  );
};
