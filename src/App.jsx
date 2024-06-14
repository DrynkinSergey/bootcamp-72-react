import { useState } from 'react';
import { Employee } from './components/Employees/Employee';
import { Form } from './components/UseIDEXample/Form';
import Modal from './components/Modal/Modal';
import { AnimatePresence } from 'framer-motion';
import { PetForm } from './components/PetForm/PetForm';
import { PetFormRHF } from './components/PetForm/PetFormRHF';

export const App = () => {
  return (
    <>
      <PetFormRHF />
      <PetForm />
    </>
  );
};
export default App;
