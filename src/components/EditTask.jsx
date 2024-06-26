import { nanoid } from '@reduxjs/toolkit';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectColumns } from '../redux/columns/slice';
import { selectUser } from '../redux/auth/slice';
import { editTask } from '../redux/tasks/slice';

export const EditTask = ({ close, task }) => {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    console.log(values);
    dispatch(editTask(values));
    close();
  };
  const tables = useSelector(selectColumns);
  const initialValues = {
    ...task,
  };
  return (
    <div className='w-[600px]'>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Title</span>
            </label>
            <Field name='title' placeholder='title' className='input input-bordered' required />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Table</span>
            </label>
            <Field as='select' name='table' className='input input-bordered'>
              {tables.map(item => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Field>
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Description</span>
            </label>
            <Field
              as='textarea'
              name='description'
              placeholder='description'
              className='textarea textarea-bordered'
              required
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
          <button onClick={close} type='button' className='btn btn-error'>
            Cancel
          </button>
        </Form>
      </Formik>
    </div>
  );
};
