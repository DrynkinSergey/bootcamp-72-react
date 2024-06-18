import { useContext } from 'react';
import { Item } from './Item';
import { TodosContext } from '../../context/TodosProvieder';

export const List = () => {
  const { todos } = useContext(TodosContext);
  return (
    <ul className='flex flex-col gap-4 '>
      {todos.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};
