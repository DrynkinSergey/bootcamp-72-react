import { useForm } from 'react-hook-form';
import s from './PostsApp.module.scss';
import { useContext } from 'react';
import { AutoContext } from '../../App';
export const SearchBar = ({ setQuery }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    setQuery(data.query);
  };
  const { auto, model, data } = useContext(AutoContext);
  console.log(data);
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <h1>
        {auto} {model}
      </h1>
      <input placeholder='Search...' className={s.input} type='search' {...register('query')} />

      <button className='btn'>Search</button>
    </form>
  );
};
