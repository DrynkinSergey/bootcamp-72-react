import s from './StoreApp.module.css';
import { AnimatePresence, motion } from 'framer-motion';
export const Cart = ({ cart, removeFromCart, increaseQty, decreaseQty }) => {
  if (!cart.length) {
    return <img src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png' />;
  }
  return (
    <div className={s.cart}>
      <p>Total: {cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}$</p>
      <ul>
        <AnimatePresence>
          {cart.map(item => (
            <motion.li exit={{ opacity: 0, x: 100 }} key={item.id}>
              <img width={100} src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
              <p>{item.price}$</p>
              <div>
                <button onClick={() => decreaseQty(item)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item)}>+</button>
              </div>
              <button className='btn' onClick={() => removeFromCart(item)}>
                Remove
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};
