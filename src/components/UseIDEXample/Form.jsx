import { useEffect, useRef, useState } from 'react';
import { Input } from './Input';
import { Box } from './Box';

export const Form = () => {
  const [fieldsCount, setFieldsCount] = useState(2);
  const btnRef = useRef(null);
  useEffect(() => {
    setInterval(() => {
      btnRef.current.click();
    }, 100);
  }, []);
  return (
    <div>
      <button ref={btnRef} className='btn' onClick={() => setFieldsCount(prev => prev + 1)}>
        Add field
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {Array(fieldsCount)
          .fill('')
          .map((_, index) => (
            <Box key={index} index={index} />
          ))}
      </div>
    </div>
  );
};
