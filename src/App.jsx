import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import { Users } from './pages/Users';
import SingleUser from './pages/SingleUser';
import Aim from './components/Nested/Aim';
import Company from './components/Nested/Company';
import Team from './components/Nested/Team';
import InfoUser from './components/Nested/InfoUser';
import PostsByUser from './components/Nested/PostsByUser';
import PostDetails from './components/Nested/PostDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />

          <Route path='about' element={<About />}>
            <Route path='aim' element={<Aim />} />
            <Route path='company' element={<Company />} />
            <Route path='team' element={<Team />} />
          </Route>

          <Route path='users' element={<Users />} />
          <Route path='users/:userId' element={<SingleUser />}>
            <Route path='info' element={<InfoUser />} />

            <Route path='posts' element={<PostsByUser />}>
              <Route path=':postId' element={<PostDetails />} />
            </Route>
          </Route>
        </Route>

        <Route path='/login' element={<h2>login</h2>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};
