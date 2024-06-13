import { EmployeeCard } from './EmployeeCard';
import s from './Employee.module.css';

export const EmployeeList = ({ users = [], handleDeleteUser }) => {
  if (!users.length) {
    return <h1>Немає юзерів для роботи</h1>;
  }

  return (
    <ul className={s.userList}>
      {users.map(user => (
        <EmployeeCard handleDeleteUser={handleDeleteUser} key={user.id} {...user} />
      ))}
    </ul>
  );
};
