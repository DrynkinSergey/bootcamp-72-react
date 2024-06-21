import { useForm } from 'react-hook-form';
import { useHttp } from '../hooks/useHttp';
import { fetchRecipes, fetchRecipesByQuery } from '../services/api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export const Recipes = () => {
  const { register, handleSubmit } = useForm();

  const [searchParams, setSearchParams] = useSearchParams();
  // 1. Об'єкт з параметрами пошуку (query string)
  // 2. Функція для зміни параметрів пошуку

  const query = searchParams.get('query');
  const { data: recipes } = useHttp(query ? fetchRecipesByQuery : fetchRecipes, query);

  const onSubmit = data => {
    console.log(data);
    setSearchParams(data.query ? { query: data.query } : {});
  };

  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('query')} placeholder='Search' type='text' />
        <button>Search</button>
      </form>

      <ul className='grid grid-cols-3 gap-4'>
        {recipes?.map(recipe => (
          <li className='flex flex-col' key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`} state={location}>
              <img src={recipe.image} width={200} />
              <p>{recipe.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Recipes;
