import { Link, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import { Users } from './pages/Users';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='about' element={<About />} />
          <Route path='users' element={<Users />} />
        </Route>

        <Route path='/login' element={<h2>login</h2>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};
