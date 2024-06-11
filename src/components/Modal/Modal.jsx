import { useEffect } from 'react';
import s from './Modal.module.css';
const Modal = ({ children, title = 'Default modal', onClose }) => {
  useEffect(() => {
    console.log('Модальне вікно відкрилось!');
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
      console.log(e.key);
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      console.log('Модальне вікно закривається!');
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
      <div className={s.content}>
        <>
          <h1>{title}</h1>
          <hr />
        </>
        <button onClick={onClose} className={s.closeBtn}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
