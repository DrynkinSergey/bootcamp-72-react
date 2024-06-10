import s from './TodoList.module.css';
export const TodoItem = ({ id, completed, todo, handleDeleteTodo, handleToggleTodo, handleEditTodo }) => {
  return (
    <li className={s.item}>
      <input checked={completed} onChange={() => handleToggleTodo(id)} type='checkbox' />
      <span>{todo}</span>
      <div>
        <button onClick={() => handleEditTodo(id)} className='btn border'>
          Edit
        </button>
        <button onClick={() => handleDeleteTodo(id)} className='btn border'>
          Delete
        </button>
      </div>
    </li>
  );
};
