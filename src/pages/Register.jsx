import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

export const Register = () => {
  const handleSubmit = (values, options) => {
    console.log(values);
    options.formReset();
  };
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Register now!</h1>
          <p className='py-6'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae necessitatibus est architecto molestiae
            perferendis nesciunt et sit nihil ea, error ut soluta laborum reiciendis, culpa quae voluptatibus fuga
            tenetur accusamus! Dicta illo amet dolor soluta, ducimus possimus laudantium! Distinctio dolorum porro
            possimus in amet assumenda nam, quod omnis placeat error autem corrupti doloribus tenetur adipisci sunt!
            Corporis error tempora consequuntur. Sapiente molestiae inventore vel deleniti reprehenderit recusandae,
            corporis quos. Obcaecati architecto molestias, animi commodi sequi dolorem id eius. Sequi accusamus iure
            temporibus omnis, assumenda hic autem nesciunt pariatur quaerat minus.
          </p>
        </div>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <Field name='name' type='text' placeholder='name' className='input input-bordered' required />
              </div>
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
                    You already have account? <Link to='/login'>Sign in now!</Link>
                  </span>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button type='submit' className='btn btn-primary'>
                  Register
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
