import { EmployeeCard } from './EmployeeCard';
import s from './Employee.module.css';
import { AnimatePresence } from 'framer-motion';
export const EmployeeList = ({ users = [], handleDeleteUser }) => {
  if (!users.length) {
    return <h1>Немає юзерів для роботи</h1>;
  }

  return (
    <ul className={s.userList}>
      <AnimatePresence>
        {users.map((user, index) => (
          <EmployeeCard handleDeleteUser={handleDeleteUser} index={index} key={user.id} {...user} />
        ))}
      </AnimatePresence>
    </ul>
  );
};
