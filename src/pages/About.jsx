import { NavLink, Outlet } from 'react-router-dom';

export const About = () => {
  return (
    <div>
      <h1 className='text-5xl font-bold text-center'>About page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos atque non blanditiis optio quis ipsam velit
        incidunt temporibus, reiciendis consequatur cumque repellat accusamus alias repellendus sed suscipit obcaecati
        possimus!
      </p>
      <nav className='flex justify-center bg-red-500'>
        <ul className='flex gap-4'>
          <li>
            <NavLink to='aim'>Aim</NavLink>
          </li>
          <li>
            <NavLink to='company'>Company</NavLink>
          </li>
          <li>
            <NavLink to='team'>Team</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
export default About;
