import { useContext } from 'react';
import { TodosContext } from '../../context/TodosProvieder';
import { AuthContext } from '../../context/ContextProvider';
import toast from 'react-hot-toast';

export const Item = ({ item }) => {
  const { todo } = item;
  const { deleteTodo } = useContext(TodosContext);
  const { user } = useContext(AuthContext);
  const handleDelete = () => {
    if (user === 'Alex') {
      return deleteTodo(item.id);
    }
    toast.error('Unauthorized');
  };
  return (
    <li className='flex flex-col justify-between border-2 border-black p-4 rounded-md shadow-md'>
      <p>{todo}</p>
      <button onClick={handleDelete} className='btn'>
        Delete
      </button>
    </li>
  );
};
