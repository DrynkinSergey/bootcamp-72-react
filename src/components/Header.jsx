import { useContext } from 'react';
import { AuthContext } from '../context/ContextProvider';

export const Header = () => {
  const { logout, user } = useContext(AuthContext);
  return (
    <header className='flex text-3xl justify-between items-center px-4 py-2 bg-teal-500 text-white font-bold'>
      <div>Logo</div>
      <div>{user}</div>
      <button onClick={logout} className='rounded-md bottom-2 border-black bg-black text-white p-2'>
        Logout
      </button>
    </header>
  );
};
