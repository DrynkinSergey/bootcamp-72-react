import { createContext, useState } from 'react';
import { nanoid } from 'nanoid';

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const addTodo = todo => {
    const newTodo = {
      id: nanoid(),
      todo,
      completed: false,
    };
    setTodos(prev => [...prev, newTodo]);
  };
  const deleteTodo = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };
  const toggleTodo = id => {
    setTodos(prev =>
      prev.map(item => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const contextValue = { todos, deleteTodo, addTodo, toggleTodo };
  return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>;
};
