import clsx from 'clsx';
import s from './Employee.module.css';
export const EmployeeCard = ({ id, name, email, bio, skills, isOpenToWork, handleDeleteUser }) => {
  return (
    <li className={clsx(s.userCard, isOpenToWork ? s.openToWork : s.closeToWork)}>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{bio}</p>
      <ul className={s.skillList}>
        {skills.map(skill => (
          <li className={s.skillLabel} key={skill}>
            {skill}
          </li>
        ))}
      </ul>
      <button onClick={() => handleDeleteUser(id)} className={s.btn}>
        Delete
      </button>
    </li>
  );
};
