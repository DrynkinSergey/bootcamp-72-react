import s from './Counter.module.css';
export const Counter = () => {
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1 className='text-4xl font-bold mb-4 text-white'>{1}</h1>
        <input value={1} />
        <div className={s.flex}>
          <button className='btn btn-primary'>minus</button>
          <button className='btn btn-primary'>reset</button>
          <button className='btn btn-primary'>plus</button>
        </div>
      </div>
    </div>
  );
};
