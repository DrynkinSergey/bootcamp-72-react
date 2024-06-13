import { useState } from 'react';
import { CustomInput } from './CustomInput';

export const FormControlledUpdte = ({ register }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    age: '',
    gender: 'male',
    city: '',
    agree: false,
    summary: '',
  });

  const handleChangeInput = e => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      console.log('Тільки консоль спрацює для чекбокса');
      return setFormData(prev => ({ ...prev, [name]: !prev[name] }));
    }

    console.log('Цей код знаходиться і виконується якщо ми не потрапили до поля вибору "checkbox"');
    // ✅ рекомендується використовувати динамічне обчислення
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    register(formData);
    setFormData({ username: '', email: '', password: '' });
  };

  const inputsData = [
    {
      name: 'username',
      placeholder: 'Enter your name',
      label: 'Name',
      type: 'text',
      value: formData.username,
    },
    {
      name: 'email',
      placeholder: 'Enter your email',
      label: 'Email',
      type: 'email',
      value: formData.email,
    },
    {
      name: 'password',
      placeholder: 'Enter your password',
      label: 'Password',
      type: 'password',
      value: formData.password,
    },
    {
      name: 'age',
      placeholder: 'Enter your age',
      label: 'Age',
      type: 'number',
      value: formData.age,
    },
  ];
  return (
    <div className='formWrapper'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Register</h1>

        {inputsData.map(input => (
          <CustomInput key={input.name} {...input} onChange={handleChangeInput} />
        ))}

        <label className='label'>
          <span>Summary</span>
          <textarea
            value={formData.summary}
            onChange={handleChangeInput}
            className='input'
            name='summary'
            placeholder='Enter your summary'
          />
        </label>

        <label>
          <input
            type='radio'
            checked={formData.gender === 'male'}
            name='gender'
            value='male'
            onChange={handleChangeInput}
          />{' '}
          Male
        </label>

        <label>
          <input
            type='radio'
            checked={formData.gender === 'female'}
            name='gender'
            value='female'
            onChange={handleChangeInput}
          />{' '}
          Female
        </label>
        <label>
          <input
            type='radio'
            checked={formData.gender === 'other'}
            name='gender'
            value='other'
            onChange={handleChangeInput}
          />{' '}
          Other
        </label>

        <label className='label'>
          <span>City</span>
          <select value={formData.city} onChange={handleChangeInput} className='input' name='city'>
            <option value='' disabled>
              Оберіть місто
            </option>
            <option value='Lviv'>Lviv</option>
            <option value='Kyiv'>Kyiv</option>
            <option value='Odessa'>Odessa</option>
          </select>
        </label>

        <label>
          <input checked={formData.agree} className='input' name='agree' onChange={handleChangeInput} type='checkbox' />{' '}
          I agree to the terms and conditions
        </label>
        <button className='btn' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
};
export default FormControlledUpdte;
