import { useEffect } from 'react';
import s from './Modal.module.css';
import { motion } from 'framer-motion';

const Modal = ({ children, title = 'Default modal', onClose }) => {
  useEffect(() => {
    console.log('Модальне вікно відкрилось!');
    const handleKeyDown = e => {
      console.log(e.key);
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const intervalId = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
    }, 1000);
    const timeoutId = setTimeout(() => {
      console.log('Woohoo!');
    }, 3000);

    return () => {
      console.log('Модальне вікно закривається!');
      document.removeEventListener('keydown', handleKeyDown);
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={handleBackdropClick} className={s.wrapper}>
      <motion.div
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring' } }}
        exit={{ opacity: 0, y: -400, rotate: 360, transition: { duration: 0.5 }, scale: 0.5 }}
        className={s.content}
      >
        <>
          <h1>{title}</h1>
          <hr />
        </>
        <button onClick={onClose} className={s.closeBtn}>
          ×
        </button>
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
