import FormControlled from './components/Forms/FormControlled';

export const App = () => {
  const register = data => {
    console.log('Your data was received...');
    setTimeout(() => {
      console.log('Register in progress 🚀');
    }, 1000);
    setTimeout(() => {
      console.log('Your data was successfully registered! 🎉');
      console.log(data);
    }, 1500);
  };
  return (
    <>
      <FormControlled register={register} />
      {/* <Employee /> */}
    </>
  );
};
export default App;
