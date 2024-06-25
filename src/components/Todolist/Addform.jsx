import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todolist/slice';
import { nanoid } from '@reduxjs/toolkit';

export const Addform = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    const newTodo = {
      id: nanoid(),
      completed: false,
      todo: data.todo,
    };
    dispatch(addTodo(data.todo));
    reset();
  };
  return (
    <div className='py-4 '>
      <form className='flex gap-2 justify-center mx-auto  w-1/2 items-center' onSubmit={handleSubmit(onSubmit)}>
        <input className='input input-bordered input-primary w-full ' {...register('todo')} placeholder='add todo' />
        <button className=' btn btn-primary'>Add</button>
      </form>
    </div>
  );
};
