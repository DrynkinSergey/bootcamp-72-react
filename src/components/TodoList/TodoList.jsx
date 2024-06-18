import { useContext, useEffect, useState } from 'react';
import todosData from './../../assets/todos.json';
import { TodoItem } from './TodoItem';
import s from './TodoList.module.css';
import { nanoid } from 'nanoid';
import Modal from '../Modal/Modal';
import { AuthContext } from '../../context/ContextProvider';

export const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const todos = JSON.parse(window.localStorage.getItem('todos'));
    if (todos.length) {
      return todos;
    }
    return todosData;
  });
  const { user } = useContext(AuthContext);
  console.log(user);
  const [newTodoText, setNewTodoText] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const handleDeleteTodo = id => {
    console.log(id);
    setTodos(prev => prev.filter(item => item.id !== id)); //+
  };

  const handleAddTodo = () => {
    setTodos(prev => [...prev, { id: nanoid(), todo: newTodoText, completed: false }]);
  };

  const handleToggleTodo = id => {
    console.log(id);
    setTodos(prev => prev.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)));
  };

  const handleEditTodo = id => {
    console.log(id);
    setTodos(prev =>
      prev.map(item => {
        if (item.id === id) {
          return { ...item, todo: prompt('Enter new title:') };
        } else {
          return item;
        }
      })
    );
  };

  const getFilteredData = () => {
    return todos.filter(item => item.todo.toLowerCase().includes(searchValue.toLowerCase()));
  };

  const handleClearTodos = () => {
    setTodos([]);
  };
  const handleDeleteSelected = () => {
    setTodos(prev => prev.filter(item => !item.completed));
  };
  const toggleModal = () => setIsOpen(prev => !prev);

  const completedTasks = todos.reduce((total, item) => (item.completed ? total + 1 : total), 0);
  const value = (completedTasks / todos.length) * 100;
  return (
    <>
      <div className='flex'>
        <button className='btn border' onClick={toggleModal}>
          Open modal
        </button>
        <input
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          className={s.input}
          type='text'
          placeholder='Enter search value...'
        />
        <input value={newTodoText} onChange={e => setNewTodoText(e.target.value)} className={s.input} />
        <button onClick={handleAddTodo} className='btn border'>
          Add
        </button>
      </div>
      <h3> Completed tasks: {completedTasks}</h3>
      <h4>Percantage of completed tasks: {Math.round((completedTasks / todos.length) * 100)}%</h4>
      <div className={s.wrapperProgress}>
        <div className={s.progress} style={{ width: `${value}%`, backgroundColor: value > 50 ? 'green' : 'red' }}></div>
      </div>
      <ul className={s.list}>
        {getFilteredData().map(item => (
          <TodoItem
            key={item.id}
            {...item}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
            handleEditTodo={handleEditTodo}
          />
        ))}
      </ul>
      <button onClick={handleClearTodos} className='btn'>
        Clear
      </button>
      <button onClick={handleDeleteSelected} className='btn'>
        Delete selected
      </button>

      {isOpen && (
        <Modal onClose={toggleModal} title='Adv'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae vel ducimus assumenda harum. Blanditiis,
          vitae accusamus? Ipsum labore, tenetur dolore ullam eligendi minima ut, rerum fugiat numquam aspernatur velit!
        </Modal>
      )}
    </>
  );
};
