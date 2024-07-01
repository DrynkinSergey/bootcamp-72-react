import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col'>
        <h1>Sorry page not found</h1>
        <Link to='/'>Go back</Link>
      </div>
    </div>
  );
};
