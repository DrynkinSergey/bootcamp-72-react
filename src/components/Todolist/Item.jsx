import { useDispatch } from 'react-redux';
import { deleteThunk, toggleTodoThunk } from '../../redux/todolist/operations';

export const Item = ({ item }) => {
  const { todo } = item;
  const dispatch = useDispatch();
  return (
    <li className='card bg-base-100  shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'> {todo}</h2>
        <input type='checkbox' checked={item.completed} onChange={() => dispatch(toggleTodoThunk(item))} />
        <div className='card-actions justify-end'>
          <button onClick={() => dispatch(deleteThunk(item.id))} className='btn btn-primary'>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};
