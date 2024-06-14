import { Card } from './Card';
import s from './StoreApp.module.css';
export const List = ({ products, isExistInCart, addToCart }) => {
  return (
    <ul className={s.list}>
      {products.map(item => (
        <Card isExistInCart={isExistInCart} addToCart={addToCart} key={item.id} item={item} />
      ))}
    </ul>
  );
};
