export const Item = ({ item }) => {
  const { todo } = item;
  return (
    <li className='card bg-base-100  shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'> {todo}</h2>
        <input type='checkbox' />
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Delete</button>
        </div>
      </div>
    </li>
  );
};
