import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TodosContext } from '../../context/TodosProvieder';

export const AddTodo = () => {
  const { register, handleSubmit } = useForm();
  const { addTodo } = useContext(TodosContext);
  const onSubmit = data => {
    console.log(data);
    addTodo(data.todo);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex gap-2'>
        <input type='text' className='w-full border-2 border-black' {...register('todo')} />
        <button>Add</button>
      </form>
    </div>
  );
};
