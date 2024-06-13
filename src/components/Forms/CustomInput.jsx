export const CustomInput = ({ label, name, placeholder, type = 'text', onChange, value }) => {
  return (
    <label className='label'>
      <span className='red'>{label}</span>
      <input value={value} onChange={onChange} className='input' name={name} placeholder={placeholder} type={type} />
    </label>
  );
};
