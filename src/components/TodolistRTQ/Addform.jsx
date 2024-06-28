import { useForm } from 'react-hook-form';
import { useAddTodoMutation } from '../../redux/todoApi';

export const Addform = () => {
  const { register, handleSubmit, reset } = useForm();
  const [addTodo] = useAddTodoMutation();
  const onSubmit = data => {
    reset();
    addTodo({ todo: data.todo });
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
