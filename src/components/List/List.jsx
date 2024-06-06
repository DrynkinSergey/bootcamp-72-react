const List = ({ title = 'DEFAULT SECTION', items = [], count, user }) => {
  // const { title, items } = props;
  return (
    <>
      <h2>{title}</h2>
      {user && <h2>Owner: {user}</h2>}
      <h3>Items count: {count}</h3>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>{item.completed ? 'ВИКОНАНО' : 'ЩЕ В ПРОЦЕСІ'}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
