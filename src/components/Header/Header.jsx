import s from './Header.module.css';
export const Header = ({ logout, user, setPage }) => {
  return (
    <header className={s.header}>
      <h1>Articles LTD</h1>
      <h2>{user}</h2>
      <nav>
        <ul>
          <li onClick={() => setPage('home')}>Home</li>
          <li onClick={() => setPage('archive')}>Archive</li>
          <li onClick={() => setPage('addArticle')}>New Article</li>
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
