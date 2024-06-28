import { useDeleteTodoMutation, useToggleTodoMutation } from '../../redux/todoApi';

export const Item = ({ item }) => {
  const { todo } = item;
  const [deleteTodo] = useDeleteTodoMutation();
  const [toggleTodo] = useToggleTodoMutation();
  return (
    <li className='card bg-base-100  shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'> {todo}</h2>
        <input type='checkbox' onChange={() => toggleTodo(item)} checked={item.completed} />
        <div className='card-actions justify-end'>
          <button onClick={() => deleteTodo(item.id)} className='btn btn-primary'>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};
