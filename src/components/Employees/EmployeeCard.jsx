import clsx from 'clsx';
import s from './Employee.module.css';
import { motion } from 'framer-motion';
export const EmployeeCard = ({ id, index, name, email, bio, skills, isOpenToWork, handleDeleteUser }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      // whileHover={{ scale: [0.5, 1, 0.5, 1], rotate: [-30, 60, -30, 0] }}
      animate={{
        opacity: 1,
        y: 0,
        scale: [0.5, 1, 0.5, 1],
        rotate: [-30, 60, -30, 0],
        transition: { duration: 0.5, delay: index * 0.2, type: 'spring' },
      }}
      exit={{ opacity: 0, y: -100, transition: { duration: 0.5 } }}
      className={clsx(s.userCard, isOpenToWork ? s.openToWork : s.closeToWork)}
    >
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
    </motion.li>
  );
};
