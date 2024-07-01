import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectExpense, selectIncome } from '../../redux/categories/slice';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { addTransactionThunk } from '../../redux/transactions/operations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
export const AddForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const expense = useSelector(selectExpense);
  const income = useSelector(selectIncome);
  const navigate = useNavigate();
  const initialValues = {
    comment: '',
    sum: 0,
    type: 'expense',
    category: '',
    author: 'Alex',
  };
  const handleSubmit = (values, options) => {
    dispatch(addTransactionThunk({ ...values, createdAt: startDate }))
      .unwrap()
      .then(() => {
        navigate('/dashboard');
      })
      .catch(() => {
        toast.error('Some error!');
      });

    options.resetForm();
  };
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form className='flex flex-col gap-4 shadow-[0px_0px_20px_5px_teal] p-8 w-1/2 items-center'>
            <Field
              type='text'
              placeholder='Comment'
              name='comment'
              className='input input-bordered input-accent w-full max-w-lg'
            />
            <Field
              type='number'
              placeholder='Sum'
              name='sum'
              className='input input-bordered input-accent w-full max-w-lg'
            />
            <div className='flex gap-4'>
              <Field as='select' name='type' className='select select-accent w-full '>
                <option value='expense'>Expense</option>
                <option value='income'>Income</option>
              </Field>
              <DatePicker
                className='input input-bordered input-accent w-full '
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </div>
            <Field as='select' name='category' className='select select-accent w-full max-w-lg'>
              {(values.type === 'income' ? income : expense).map(category => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </Field>

            <div className='flex gap-4 justify-center'>
              <button type='submit' className='btn btn-outline btn-accent'>
                Add
              </button>
              <button type='button' className='btn btn-outline btn-error'>
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
