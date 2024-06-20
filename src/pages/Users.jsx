import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);
  return (
    <div className='px-10'>
      <h1 className='text-5xl font-bold text-center'>Users page</h1>
      <ul className='grid grid-cols-4 gap-4 py-10'>
        {users.map(user => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};
