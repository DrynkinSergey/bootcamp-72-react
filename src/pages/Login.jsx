import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { login, selectIsLoggedIn } from '../redux/auth/slice';

export const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(login(values));
    options.formReset();
  };
  const initialValues = {
    email: '',
    password: '',
  };
  if (isLoggedIn) {
    return <Navigate to='/' replace={true} />;
  }
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Login now!</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <Field name='email' type='email' placeholder='email' className='input input-bordered' required />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <Field
                  name='password'
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                  required
                />
                <label className='label'>
                  <span>
                    You do not have account? <Link to='/register'>Sign up now!</Link>
                  </span>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button type='submit' className='btn btn-primary'>
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
