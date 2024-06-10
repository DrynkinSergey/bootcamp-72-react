import { useState } from 'react';
import todosData from './../../assets/todos.json';
import { TodoItem } from './TodoItem';
import s from './TodoList.module.css';
import { nanoid } from 'nanoid';
export const TodoList = () => {
  const [todos, setTodos] = useState(todosData);
  const [newTodoText, setNewTodoText] = useState('');

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
    // setTodos(prev => prev.map(item => (item.id === id ? { ...item, todo: prompt('Enter new title:') } : item)));
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

  return (
    <>
      <div className='flex'>
        <input value={newTodoText} onChange={e => setNewTodoText(e.target.value)} className={s.input} />
        <button onClick={handleAddTodo} className='btn border'>
          Add
        </button>
      </div>
      <ul className={s.list}>
        {todos.map(item => (
          <TodoItem
            key={item.id}
            {...item}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
            handleEditTodo={handleEditTodo}
          />
        ))}
      </ul>
    </>
  );
};
