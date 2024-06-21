import { Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
// import About from './pages/About';
import Layout from './components/Layout';
// import NotFound from './pages/NotFound';
import { Users } from './pages/Users';
// import SingleUser from './pages/SingleUser';
// import Aim from './components/Nested/Aim';
// import Company from './components/Nested/Company';
// import Team from './components/Nested/Team';
// import InfoUser from './components/Nested/InfoUser';
// import PostsByUser from './components/Nested/PostsByUser';
// import PostDetails from './components/Nested/PostDetails';
// import Recipes from './pages/Recipes';
// import SingleRecipe from './pages/SingleRecipe';
import { lazy } from 'react';
import { Login } from './pages/Login';
import { PrivateRoute } from './routes/PrivateRoute';

const SingleUser = lazy(() => import('./pages/SingleUser'));
const Aim = lazy(() => import('./components/Nested/Aim'));
const Company = lazy(() => import('./components/Nested/Company'));
const Team = lazy(() => import('./components/Nested/Team'));
const NotFound = lazy(() => import('./pages/NotFound'));
const About = lazy(() => import('./pages/About'));
const InfoUser = lazy(() => import('./components/Nested/InfoUser'));
const PostsByUser = lazy(() => import('./components/Nested/PostsByUser'));
const PostDetails = lazy(() => import('./components/Nested/PostDetails'));
const SingleRecipe = lazy(() => import('./pages/SingleRecipe'));
const Recipes = lazy(() => import('./pages/Recipes'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Homepage />} />

          <Route path='about' element={<About />}>
            <Route path='aim' element={<Aim />} />
            <Route path='company' element={<Company />} />
            <Route path='team' element={<Team />} />
          </Route>

          {/* <Route path='users' element={<Navigate to='/people' />} /> */}
          <Route path='users' element={<Users />} />

          <Route path='recipes' element={<Recipes />} />
          <Route path='recipes/:recipeId' element={<SingleRecipe />}>
            <Route path='info' element={<h2>recipe info</h2>} />
          </Route>

          <Route path='users/:userId' element={<SingleUser />}>
            <Route path='info' element={<InfoUser />} />

            <Route path='posts' element={<PostsByUser />}>
              <Route path=':postId' element={<PostDetails />} />
            </Route>
          </Route>
        </Route>

        {/* <Route path='/login' element={<h2>login</h2>} /> */}
        <Route path='/login' element={<Login />} />

        {/* <Route path='*' element={<Navigate to='/' />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};
