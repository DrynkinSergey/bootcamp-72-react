import { useState } from 'react';

export const FormControlled = ({ register }) => {
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

  // const handleChangeName = e => {
  //   setFormData(prev => ({ ...prev, username: e.target.value }));
  // };
  // const handleChangeEmail = e => {
  //   setFormData(prev => ({ ...prev, email: e.target.value }));
  // };
  // const handleChangePassword = e => {
  //   setFormData(prev => ({ ...prev, password: e.target.value }));
  // };

  const handleChangeInput = e => {
    const { name, value, type } = e.target;

    // ❌ не рекомендується
    // switch (name) {
    //   case 'username':
    //     return setFormData(prev => ({ ...prev, username: value }));
    //   case 'email':
    //     return setFormData(prev => ({ ...prev, email: value }));
    //   case 'password':
    //     return setFormData(prev => ({ ...prev, password: value }));
    //   case 'age':
    //     return setFormData(prev => ({ ...prev, age: +value }));
    //   default:
    //     break;
    // }

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
  return (
    <div className='formWrapper'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label className='label'>
          <span>Name</span>
          <input
            value={formData.username}
            onChange={handleChangeInput}
            className='input'
            name='username'
            placeholder='Enter your name'
            type='text'
          />
        </label>

        <label className='label'>
          <span>Email</span>
          <input
            value={formData.email}
            onChange={handleChangeInput}
            className='input'
            name='email'
            placeholder='Enter your email'
            type='email'
          />
        </label>

        <label className='label'>
          <span>Password</span>
          <input
            value={formData.password}
            onChange={handleChangeInput}
            className='input'
            name='password'
            placeholder='Enter your password'
            type='password'
          />
        </label>
        <label className='label'>
          <span>Age</span>
          <input
            value={formData.age}
            onChange={handleChangeInput}
            className='input'
            name='age'
            placeholder='Enter your age'
            type='text'
          />
        </label>
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
export default FormControlled;
