import { AddTodo } from './AddTodo';
import { List } from './List';

export const Todos = () => {
  return (
    <div className='p-5'>
      <h1 className='text-center'>Todolist</h1>
      <AddTodo />
      <List />
    </div>
  );
};
