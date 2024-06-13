import { useId } from 'react';

export const Input = ({ index }) => {
  console.log(crypto.randomUUID());
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>Click me if you want to focus input N{index + 1} </label>
      <input id={id} type='text' placeholder='Text' />
    </div>
  );
};
