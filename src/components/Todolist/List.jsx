import { useSelector } from 'react-redux';
import { Item } from './Item';
import { selectFilteredData, selectFilteredDataMemo } from '../../redux/todolist/slice';

export const List = () => {
  const items = useSelector(selectFilteredDataMemo);

  return (
    <ul className='grid grid-cols-4 gap-4'>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};