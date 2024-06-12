import s from './Header.module.css';
export const Header = ({ logout, user }) => {
  return (
    <header className={s.header}>
      <h1>Articles LTD</h1>
      <h2>{user}</h2>
      <nav>
        <ul>
          <li>Home</li>
          <li>Archive</li>
          <li>
            <button onClick={logout} className='btn'>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
