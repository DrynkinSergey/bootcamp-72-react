import { useSelector } from 'react-redux';
import s from './Counter.module.css';
export const Counter = () => {
  const counter = useSelector(state => state.counter);
  const step = useSelector(state => state.step);

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1 className='text-4xl font-bold mb-4 text-white'>{counter}</h1>
        <input value={step} />
        <div className={s.flex}>
          <button className='btn btn-primary'>minus</button>
          <button className='btn btn-primary'>reset</button>
          <button className='btn btn-primary'>plus</button>
        </div>
      </div>
    </div>
  );
};
