import { useEffect, useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(() => +window.localStorage.getItem('counter') || 0);
  // const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log('Counter was mounted');
  }, []);
  console.log('RENDER');
  useEffect(() => {
    console.log('Counter was updated', counter);
    window.localStorage.setItem('counter', counter);
  }, [counter]);

  useEffect(() => {
    console.log('Step was updated', step);
  }, [step]);

  const handlePlusClick = () => {
    setCounter(prev => prev + step);
  };
  const handleMinusClick = () => {
    setCounter(prev => prev - step);
  };
  const handleResetClick = () => {
    setCounter(0);
    setStep(1);
  };
  const handleChangeStep = e => {
    console.log(e.target.value);
    setStep(+e.target.value);
  };
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input value={step} onChange={handleChangeStep} />
        <div className={s.flex}>
          <button disabled={!step} className='btn' onClick={handleMinusClick}>
            minus
          </button>
          <button className='btn' onClick={handleResetClick}>
            reset
          </button>
          <button className='btn' onClick={handlePlusClick}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
