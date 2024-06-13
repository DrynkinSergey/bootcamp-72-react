import { Employee } from './components/Employees/Employee';
import Form from './components/Forms/Form';

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
      <Form register={register} />
      {/* <Employee /> */}
    </>
  );
};
export default App;
