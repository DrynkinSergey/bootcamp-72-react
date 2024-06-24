import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/todolist/actions';

export const Item = ({ item }) => {
  const { todo } = item;
  const dispatch = useDispatch();
  return (
    <li className='card bg-base-100  shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'> {todo}</h2>
        <input type='checkbox' />
        <div className='card-actions justify-end'>
          <button onClick={() => dispatch(deleteItem(item.id))} className='btn btn-primary'>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};
