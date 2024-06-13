export const Box = ({ index }) => {
  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  return <div style={{ width: '100px', height: '100px', backgroundColor: index % 2 === 0 ? 'green' : 'black' }}></div>;
};
