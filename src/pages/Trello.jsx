import { useSelector } from 'react-redux';
import { selectColumns } from '../redux/columns/slice';
import { Column } from '../components/Column';

export const Trello = () => {
  const columns = useSelector(selectColumns);
  return (
    <div>
      <h1>Welcome to TRELLO V. 0.0.1</h1>
      <ul className='grid justify-center grid-cols-3 gap-4 px-8'>
        {columns.map(item => (
          <Column key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
