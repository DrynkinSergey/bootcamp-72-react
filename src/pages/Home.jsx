import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage:
          'url(https://authress.io/knowledge-base/assets/images/auth-sitrep-95de7f3bb88997789d2ce3d5cd8d19e7.jpg)',
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-neutral-content text-center'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
          <p className='mb-5'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
          <Link to='/todos' className='btn btn-primary'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
