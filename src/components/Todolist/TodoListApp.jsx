import { Addform } from './Addform';
import { List } from './List';

export const TodoListApp = () => {
  return (
    <div className='px-10'>
      <Addform />
      <List />
    </div>
  );
};
