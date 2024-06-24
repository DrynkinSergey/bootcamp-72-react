import { Item } from './Item';

export const List = () => {
  return (
    <ul className='grid grid-cols-4 gap-4'>
      {[{ todo: 'TEST', completed: false, id: 1 }].map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};
