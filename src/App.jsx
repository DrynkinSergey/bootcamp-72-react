import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Todos } from './pages/Todos';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='todos' element={<Todos />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
  );
};
// https://task-manager-api.goit.global/
