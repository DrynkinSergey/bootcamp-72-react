import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className='flex justify-center gap-4 py-4'>
      <button onClick={() => dispatch(changeFilter('all'))} className='btn btn-primary'>
        All
      </button>
      <button onClick={() => dispatch(changeFilter('active'))} className='btn btn-primary'>
        Active
      </button>
      <button onClick={() => dispatch(changeFilter('completed'))} className='btn btn-primary'>
        Completed
      </button>
    </div>
  );
};
