import { useCallback } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(1);
  const handlePlusClick = () => {
    setCounter(prev => prev + 1);
  };

  const handleMinusClick = () => {
    setCounter(prev => prev - 1);
  };

  const handleResetClick = () => {
    setCounter(0);
  };

  // x10rd01x
  // 0d1xrr01
  // 110dxr01
  // 110dxr01

  const calcHardValue = useCallback(() => {
    console.log('Calc start');
    for (let index = 0; index < 1_000_000_000; index++) {
      let a = 2;
    }
    console.log('Calc end');
    return value * value;
  }, [value]);

  console.log('Render');
  const result = useMemo(() => calcHardValue(), [calcHardValue]);
  return (
    <div className='grid place-content-center min-h-screen'>
      <div className='bg-slate-500  p-10 flex flex-col rounded-xl shadow-[2px_2px_4px_4px_gray]'>
        <h1 className='text-7xl text-[#e4fe19] text-center mb-10 font-bold '>{counter}</h1>
        <h2 className='text-5xl text-red-500'>{result}</h2>
        <div className='flex gap-2'>
          <button onClick={handleMinusClick} className='btn'>
            Minus
          </button>
          <button onClick={handleResetClick} className='btn'>
            Reset
          </button>
          <button onClick={handlePlusClick} className='btn'>
            Plus
          </button>
          <button onClick={() => setValue(prev => prev + 1)} className='btn'>
            Increase calc value
          </button>
        </div>
      </div>
    </div>
  );
};
