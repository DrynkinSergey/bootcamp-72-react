import { useDispatch, useSelector } from 'react-redux';
import { Addform } from './Addform';
import { List } from './List';
import { Filter } from './Filter';
import { fetchDataThunk } from '../../redux/todolist/operations';
import { useEffect } from 'react';
import { selectIsError, selectIsLoading } from '../../redux/todolist/slice';

export const TodoListApp = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);
  return (
    <div className='px-10 relative'>
      {isLoading && <span className='loading loading-spinner text-primary absolute right-5 top-5'></span>}
      {isError && (
        <div className='toast toast-top toast-start'>
          <div className='alert alert-info'>
            <span>Something went wrong!</span>
          </div>
        </div>
      )}
      <Addform />
      <Filter />

      <List />
    </div>
  );
};
