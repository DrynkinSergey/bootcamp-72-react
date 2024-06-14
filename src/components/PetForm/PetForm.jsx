import { ErrorMessage, Field, Form, Formik } from 'formik';
import { petFormSchema } from '../../schemas/petForm';
import { CustomInput } from './CustomInput';

export const PetForm = () => {
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };

  const initialValues = {
    ownerName: '',
    phone: '',
    email: '',
    city: 'Kyiv',
    gender: 'male',
    agree: false,
    petName: '',
    additional: '',
  };

  return (
    <div className='formWrapper'>
      <Formik validationSchema={petFormSchema} initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className='form'>
          <CustomInput label='Owner Name:' name='ownerName' placeholder='Enter owner name' />
          <CustomInput label='Owner Phone:' type='number' name='phone' placeholder='Enter owner phone' />
          <CustomInput label='Owner Email:' name='email' placeholder='Enter owner email' />
          <CustomInput label='Pet name:' name='petName' placeholder='Enter pet name' />
          <CustomInput
            as='textarea'
            rows='5'
            label='Additional info:'
            name='additional'
            placeholder='Enter other info'
          />

          <label className='label'>
            <span>City:</span>
            <Field as='select' name='city' className='input' placeholder='Enter owner name'>
              <option value='Kyiv'>Kyiv</option>
              <option value='Lviv'>Lviv</option>
              <option value='Odessa'>Odessa</option>
              <option value='Kharkiv'>Kharkiv</option>
              <option value='Dnipro'>Dnipro</option>
            </Field>
          </label>
          <label>
            <Field type='radio' name='gender' className='input' value='male' />
            <span> male</span>
          </label>
          <label>
            <Field type='radio' name='gender' className='input' value='female' />
            <span> female</span>
          </label>
          <label>
            <Field type='checkbox' name='agree' className='input' />
            <span> I agree with rules</span>
          </label>

          <button type='submit' className='btn'>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};
