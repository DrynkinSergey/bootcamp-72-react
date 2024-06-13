import { useState } from 'react';
import { Employee } from './components/Employees/Employee';
import { Form } from './components/UseIDEXample/Form';
import Modal from './components/Modal/Modal';
import { AnimatePresence } from 'framer-motion';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  return (
    <>
      <button onClick={onOpen}>Open modal</button>
      <Employee />
      <AnimatePresence>
        {isOpen && (
          <Modal onClose={onClose}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut amet iusto rem officiis accusantium,
            blanditiis pariatur ipsa quae repellendus fugiat nam quaerat odit iure totam, cum ipsum magnam dignissimos
            adipisci.
          </Modal>
        )}
      </AnimatePresence>

      {/* <Form /> */}
    </>
  );
};
export default App;
