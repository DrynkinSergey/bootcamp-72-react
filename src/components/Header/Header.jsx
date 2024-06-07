const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        fontSize: '20px',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: 'teal',
        color: 'white',
      }}
    >
      <div>React</div>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
