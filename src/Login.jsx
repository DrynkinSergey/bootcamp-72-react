import { Field, Form, Formik } from 'formik';
import { useContext } from 'react';
import { AuthContext } from './context/ContextProvider';

export const Login = () => {
  const { login } = useContext(AuthContext);
  const onSubmit = values => {
    login(values.username);
  };

  const initialValues = {
    username: '',
  };
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className='flex flex-col gap-2 p-10'>
          <Field className='border-2 border-black p-2 rounded-sm' name='username' />
          <button className='btn' type='submit'>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};
