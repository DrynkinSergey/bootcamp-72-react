import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchRecipeById } from '../services/api';
import { useHttp } from '../hooks/useHttp';
import { useEffect, useRef } from 'react';

export const SingleRecipe = () => {
  const { recipeId } = useParams();
  const { data: recipe } = useHttp(fetchRecipeById, recipeId);

  const location = useLocation();
  const goBackRef = useRef(location.state || '/recipes');

  useEffect(() => {
    console.log(location);
  }, [location]);

  if (!recipe) return <h2>Loading...</h2>;
  return (
    <div>
      <Link to={goBackRef.current}>Go back</Link>
      <img src={recipe.image} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <Link to='info'>Show info</Link>
      <Outlet />
    </div>
  );
};
export default SingleRecipe;
