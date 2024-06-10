import { useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState('');

  const handlePlusClick = () => {
    if (!step) {
      return setStep(+prompt('At first enter step value!'));
    }
    setCounter(prev => prev + step);
  };
  const handleMinusClick = () => {
    if (!step) {
      return setStep(+prompt('At first enter step value!'));
    }
    setCounter(prev => prev - step);
  };
  const handleResetClick = () => {
    setCounter(0);
    setStep('');
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
