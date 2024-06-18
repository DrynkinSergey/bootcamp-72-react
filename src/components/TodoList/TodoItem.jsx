import { useContext } from 'react';
import s from './TodoList.module.css';
import PropTypes from 'prop-types';
import { AutoContext } from '../../App';
export const TodoItem = ({ id, completed, todo, handleDeleteTodo, handleToggleTodo, handleEditTodo }) => {
  const { sayHello } = useContext(AutoContext);
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
        <button onClick={() => sayHello(prompt('Enter name'))} className='btn border'>
          Say hello
        </button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  completed: PropTypes.bool.isRequired,
  todo: PropTypes.string.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleToggleTodo: PropTypes.func.isRequired,
  handleEditTodo: PropTypes.func.isRequired,
};
