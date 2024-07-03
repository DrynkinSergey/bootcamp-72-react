import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTodoThunk } from '../../redux/todolist/operations';

export const Addform = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(addTodoThunk(data));
    reset();
  };
  return (
    <div className='py-4 '>
      <form className='flex gap-2 justify-center mx-auto  w-1/2 items-center' onSubmit={handleSubmit(onSubmit)}>
        <input className='input input-bordered input-primary w-full ' {...register('text')} placeholder='add todo' />
        <button className=' btn btn-primary'>Add</button>
      </form>
    </div>
  );
};
