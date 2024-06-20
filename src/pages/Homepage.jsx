import { useState } from 'react';
import Modal from '../components/Modal/Modal';
import { useToggle } from '../hooks/useToggle';

export const Homepage = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const close = () => setIsOpen(false);
  // const open = () => setIsOpen(true);
  const { isOpen, close, open } = useToggle();
  return (
    <div>
      <h1 className='text-5xl font-bold text-center'>Home page</h1>
      <button onClick={open}>Show</button>
      {isOpen && (
        <Modal onClose={close}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto libero laborum voluptatem ipsam dolores? Maxime
          laboriosam ab repellendus possimus fugiat error inventore sapiente debitis. Rem consectetur fugiat assumenda
          molestias magnam.
        </Modal>
      )}
    </div>
  );
};
export default Homepage;
