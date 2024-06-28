import { Addform } from './Addform';
import { List } from './List';

export const TodoListApp = () => {
  return (
    <div className='px-10 relative'>
      {false && <span className='loading loading-spinner text-primary absolute right-5 top-5'></span>}
      {false && (
        <div className='toast toast-top toast-start'>
          <div className='alert alert-info'>
            <span>Something went wrong!</span>
          </div>
        </div>
      )}
      <Addform />
      <List />
    </div>
  );
};
