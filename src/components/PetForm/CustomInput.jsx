import { ErrorMessage, Field } from 'formik';

export const CustomInput = ({ label, name, className, ...props }) => {
  return (
    <label className='label'>
      <span>{label}</span>
      <Field name={name} className={className} {...props} />
      <ErrorMessage name={name} className='errorField' component='div' />
    </label>
  );
};
