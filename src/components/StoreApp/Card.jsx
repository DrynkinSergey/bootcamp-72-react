import { ShoppingCart } from 'lucide-react';
import { cutText } from '../../helpers/cutText';
import s from './StoreApp.module.css';
export const Card = ({ item, addToCart, isExistInCart }) => {
  const { thumbnail, id, title, description, price, rating } = item;
  return (
    <li className={s.card}>
      {isExistInCart(id) && (
        <div className={s.icon}>
          <ShoppingCart size={36} color='#008949' />
        </div>
      )}
      <img width={200} src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{cutText(description)}</p>
      <p>{price}$</p>
      <p>Rating: {rating}</p>
      <button className='btn' onClick={() => addToCart(item)}>
        Add to cart
      </button>
    </li>
  );
};
