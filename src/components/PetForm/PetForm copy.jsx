import { Field, Form, Formik } from 'formik';
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
      <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className='form'>
          <label className='label'>
            <span>Owner Name:</span>
            <Field name='ownerName' className='input' placeholder='Enter owner name' />
          </label>
          <label className='label'>
            <span>Owner Phone:</span>
            <Field name='phone' className='input' placeholder='Enter owner name' />
          </label>
          <label className='label'>
            <span>Owner Email:</span>
            <Field name='email' className='input' placeholder='Enter owner name' />
          </label>
          <label className='label'>
            <span>Pet name:</span>
            <Field name='petName' className='input' placeholder='Enter pet name' />
          </label>
          <label className='label'>
            <span>Additional info:</span>
            <Field as='textarea' rows='5' name='additional' className='input' placeholder='Enter other info' />
          </label>

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
