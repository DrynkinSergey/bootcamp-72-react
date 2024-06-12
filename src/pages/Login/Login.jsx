import { useState } from 'react';
import s from './Login.module.css';
export const Login = ({ handleLogin }) => {
  const [userName, setUserName] = useState('');
  const handleLoginClick = () => {
    handleLogin(userName);
    setUserName('');
  };
  return (
    <div className={s.wrapper}>
      <div className={s.loginForm}>
        <h1>Log in</h1>

        <input
          value={userName}
          onChange={e => setUserName(e.target.value)}
          className='input'
          type='text'
          placeholder='enter your name'
        />
        <button onClick={handleLoginClick} className='btn'>
          Login
        </button>
      </div>
    </div>
  );
};
