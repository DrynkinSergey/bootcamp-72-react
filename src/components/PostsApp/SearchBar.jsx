import { useForm } from 'react-hook-form';
import s from './PostsApp.module.scss';
export const SearchBar = ({ setQuery }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    setQuery(data.query);
  };
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Search...' className={s.input} type='search' {...register('query')} />
      <button className='btn'>Search</button>
    </form>
  );
};
