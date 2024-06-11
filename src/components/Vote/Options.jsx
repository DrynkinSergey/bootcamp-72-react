export const Options = ({ options, handleClickChoice }) => {
  return (
    <section>
      {options.map(option => (
        <button key={option} onClick={() => handleClickChoice(option)} className='btn'>
          {option}
        </button>
      ))}
    </section>
  );
};
export default Options;
