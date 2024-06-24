import { useDispatch, useSelector } from 'react-redux';
import s from './Counter.module.css';
import { selectCounter, selectStep } from '../../redux/counter/selectors';
import { changeStep, decrement, increment, reset } from '../../redux/counter/actions';
export const Counter = () => {
  const counter = useSelector(selectCounter);
  const step = useSelector(selectStep);
  const dispatch = useDispatch();

  const handlePlusClick = () => {
    dispatch(increment());
  };
  const handleMinusClick = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const handleChangeStep = e => {
    dispatch(changeStep(+e.target.value));
  };
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1 className='text-4xl font-bold mb-4 text-white'>{counter}</h1>
        <input value={step} onChange={handleChangeStep} />
        <div className={s.flex}>
          <button onClick={handleMinusClick} className='btn btn-primary'>
            minus
          </button>
          <button onClick={handleReset} className='btn btn-primary'>
            reset
          </button>
          <button onClick={handlePlusClick} className='btn btn-primary'>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
