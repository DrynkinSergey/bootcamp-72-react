import { useDispatch, useSelector } from 'react-redux';
import { moveTask, removeTask, selectTasks } from '../redux/tasks/slice';
import { useToggle } from '../hooks/useToggle';
import Modal from './Modal/Modal';
import { AddTask } from './AddTask';
import { BadgeX, Pencil } from 'lucide-react';
import { selectColumns } from '../redux/columns/slice';
import { selectUser } from '../redux/auth/slice';
import { useState } from 'react';
import { EditTask } from './EditTask';

export const Column = ({ item }) => {
  const tasks = useSelector(selectTasks);
  const columns = useSelector(selectColumns);
  const dispatch = useDispatch();
  const { isOpen, close, open } = useToggle();
  const [modalType, setModalType] = useState('');
  const [content, setContent] = useState('');
  const user = useSelector(selectUser);
  return (
    <li className='card bg-base-100 flex flex-col  shadow-xl '>
      <div className='p-8 flex-col flex min-h-[50vh]'>
        <p className='text-lg font-bold text-center border-b-2 border-black mb-2'>{item.name}</p>
        <ul className='flex flex-grow flex-col gap-4 px-2 py-2'>
          {tasks
            .filter(task => task.table === item.id && task.author === user.email)
            .map(item => (
              <li className='flex z-[1] relative justify-between items-center' key={item.id}>
                <p>{item.title}</p>{' '}
                <select
                  value={item.table}
                  onChange={e => {
                    dispatch(moveTask({ id: item.id, table: e.target.value }));
                  }}
                  className='select select-bordered'
                >
                  {columns.map(column => {
                    return (
                      <option key={column.id} disabled={item.table === column.id} value={column.id}>
                        {column.name}
                      </option>
                    );
                  })}
                </select>
                <button>
                  <Pencil
                    onClick={() => {
                      open();
                      setModalType('edit');
                      setContent(item);
                    }}
                    className='hover:text-green-500'
                  />
                </button>
                <button onClick={() => dispatch(removeTask(item.id))}>
                  <BadgeX className='hover:text-[#ff0000]' />
                </button>
              </li>
            ))}
        </ul>

        <div className='card-actions justify-center'>
          <button
            className='btn btn-primary'
            onClick={() => {
              open();
              setModalType('add');
            }}
          >
            Add task
          </button>
        </div>
        {isOpen && (
          <Modal onClose={close} title={modalType === 'add' ? 'Add task' : 'Edit task'}>
            {modalType === 'add' && <AddTask close={close} tableId={item.id} />}
            {modalType === 'edit' && <EditTask close={close} task={content} />}
          </Modal>
        )}
      </div>
    </li>
  );
};
