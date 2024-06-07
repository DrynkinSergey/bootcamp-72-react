import s from './List.module.scss';
import { FcApproval } from 'react-icons/fc';
import { IoCloseCircle } from 'react-icons/io5';

import { FaClipboardList, FaRegUser } from 'react-icons/fa';
import { FileX, Github } from 'lucide-react';
const List = ({ title = 'DEFAULT SECTION', items = [], count, user }) => {
  // const { title, items } = props;
  return (
    <>
      <h2 className={s.title}>
        <FaClipboardList />
        {title}
      </h2>
      {user && (
        <h2 className={s.owner}>
          {' '}
          <FaRegUser className={s.userIcon} />
          Owner: {user}
        </h2>
      )}
      <h3>Items count: {count}</h3>
      <ul className={s.list}>
        {items.map(item => (
          <li className={s.item} key={item.id}>
            <p>{item.title}</p>
            <p className={s.completed}>
              {item.completed ? (
                <>
                  <FcApproval size={48} />
                  ВИКОНАНО
                </>
              ) : (
                <>
                  <IoCloseCircle color='red' size={48} />
                  ЩЕ В ПРОЦЕСІ
                </>
              )}
            </p>
            <button>
              <FileX size={32} className={s.deleteBtn} color='#00ccff' strokeWidth={1} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
