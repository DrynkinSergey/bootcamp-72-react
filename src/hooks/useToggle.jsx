import { useState } from 'react';

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  return { isOpen, close, open };
};
