export const Form = ({ register }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const password = form.elements.password.value;
    const email = form.elements.email.value;
    const username = form.elements.username.value;
    register({ username, email, password });
    form.reset();
  };
  return (
    <div className='formWrapper'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label className='label'>
          <span>Name</span>
          <input className='input' name='username' placeholder='Enter your name' type='text' />
        </label>

        <label className='label'>
          <span>Email</span>
          <input className='input' name='email' placeholder='Enter your email' type='email' />
        </label>

        <label className='label'>
          <span>Password</span>
          <input className='input' name='password' placeholder='Enter your password' type='password' />
        </label>

        <button className='btn' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
};
export default Form;