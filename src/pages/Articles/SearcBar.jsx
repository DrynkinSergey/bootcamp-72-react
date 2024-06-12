export const SearcBar = ({ searchStr, setSearchStr }) => {
  return (
    <div>
      <input
        value={searchStr}
        onChange={e => setSearchStr(e.target.value)}
        type='text'
        className='input'
        placeholder='Search...'
      />
    </div>
  );
};
