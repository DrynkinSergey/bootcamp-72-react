import { useState } from 'react';
import productsData from '../../assets/products.json';
import { useEffect } from 'react';
import { List } from './List';
import Modal from '../Modal/Modal';
import { AnimatePresence } from 'framer-motion';
import { Cart } from './Cart';
import toast from 'react-hot-toast';
export const StoreApp = () => {
  const [products] = useState(() => JSON.parse(window.localStorage.getItem('products')) || productsData);
  const [cart, setCart] = useState(() => JSON.parse(window.localStorage.getItem('cart')) || []);
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(prev => !prev);
  const addToCart = product => {
    const isExist = cart.some(item => item.id === product.id);
    if (isExist) {
      toast.success('🚀 Product increased in cart!');
      return increaseQty(product);
    }

    setCart(prev => [...prev, { ...product, qty: 1 }]);
    toast.success('🔥 Product added to cart!');
  };
  const removeFromCart = product => {
    setCart(prev => prev.filter(item => item.id !== product.id));
    toast.error(' Product removed!');
  };
  const increaseQty = product => {
    setCart(prev => prev.map(item => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item)));
  };
  const decreaseQty = product => {
    if (product.qty === 1) {
      return removeFromCart(product);
    }
    setCart(prev => prev.map(item => (item.id === product.id ? { ...item, qty: item.qty - 1 } : item)));
  };

  useEffect(() => {
    window.localStorage.setItem('products', JSON.stringify(products));
  }, [products]);
  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const isExistInCart = id => cart.some(item => item.id === id);
  return (
    <div>
      <header className='header flex'>
        <h1>Store App</h1>
        <button className='btn' onClick={toggleModal}>
          Cart
        </button>
      </header>
      <List isExistInCart={isExistInCart} products={products} addToCart={addToCart} />
      <AnimatePresence>
        {isOpen && (
          <Modal title='Cart' onClose={toggleModal}>
            <Cart cart={cart} decreaseQty={decreaseQty} increaseQty={increaseQty} removeFromCart={removeFromCart} />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};
