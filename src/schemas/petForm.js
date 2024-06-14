import * as Yup from 'yup';

const emailRegexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const petFormSchema = Yup.object({
  ownerName: Yup.string()
    .min(3, 'Name must be at least 3 characters!')
    .max(30, 'Name must be less than 30 characters!')
    .matches(/^[A-Za-z]+$/, 'Name must consist only of letters!')
    .required('Name is required!'),
  phone: Yup.string().max(14, 'Phone must be less than 14 characters!').required('Phone is required!'),
  email: Yup.string().matches(emailRegexp, 'Invalid email!').required('Email is required!'),
  petName: Yup.string()
    .required('Pet name is required!')
    .min(3, 'Pet name must be at least 3 characters!')
    .max(20, 'Pet name must be less than 20 characters!'),
  additional: Yup.string().max(150, 'Additional must be less than 150 characters!'),
});
