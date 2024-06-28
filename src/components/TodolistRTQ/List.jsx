import { useGetTodosQuery } from '../../redux/todoApi';
import { Item } from './Item';

export const List = () => {
  const { data, isLoading, isError } = useGetTodosQuery();
  return (
    <ul className='grid grid-cols-4 gap-4'>
      {isLoading && <span className='loading'></span>}
      {data?.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};
