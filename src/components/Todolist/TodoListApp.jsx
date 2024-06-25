import { useDispatch, useSelector } from 'react-redux';
import { Addform } from './Addform';
import { List } from './List';
import { changeFilter, selectFilter } from '../../redux/filterSlice';
import { Filter } from './Filter';

export const TodoListApp = () => {
  return (
    <div className='px-10'>
      <Addform />
      <Filter />

      <List />
    </div>
  );
};
