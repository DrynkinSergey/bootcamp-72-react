import { useEffect } from 'react';
import s from './Modal.module.css';
import { motion } from 'framer-motion';

const Modal = ({ children, title = 'Default modal', onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
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
