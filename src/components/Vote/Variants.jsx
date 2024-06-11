export const Variants = ({ variants = [] }) => {
  return (
    <ul>
      {variants.map(elem => (
        <li key={elem[0]}>
          {elem[0]}: {elem[1]}
        </li>
      ))}
    </ul>
  );
};
export default Variants;
