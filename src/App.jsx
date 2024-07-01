import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
