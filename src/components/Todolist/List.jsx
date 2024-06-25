import { useSelector } from 'react-redux';
import { Item } from './Item';
import { selectTodos } from '../../redux/todolist/slice';
import { selectFilter } from '../../redux/filterSlice';

export const List = () => {
  const items = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const getFilteredData = () => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter(item => !item.completed);
      case 'completed':
        return items.filter(item => item.completed);
      default:
        break;
    }
  };
  const filteredData = getFilteredData();

  return (
    <ul className='grid grid-cols-4 gap-4'>
      {filteredData.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};
