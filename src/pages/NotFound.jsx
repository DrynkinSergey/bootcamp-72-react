import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
      <img src='https://www.dpmarketingcommunications.com/wp-content/uploads/2016/11/404-Page-Featured-Image.png' />
      <Link className='font-bold' to='/'>
        Home
      </Link>
    </div>
  );
};
export default NotFound;
