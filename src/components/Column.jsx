import { useSelector } from 'react-redux';
import { selectTasks } from '../redux/tasks/slice';
import { useToggle } from '../hooks/useToggle';
import Modal from './Modal/Modal';
import { AddTask } from './AddTask';

export const Column = ({ item }) => {
  const tasks = useSelector(selectTasks);
  const { isOpen, close, open } = useToggle();
  return (
    <li className='card bg-base-100 flex flex-col  shadow-xl '>
      <div className='p-8 flex-col flex min-h-[50vh]'>
        <p className='text-lg font-bold text-center border-b-2 border-black mb-2'>{item.name}</p>
        <ul className='flex flex-grow flex-col gap-4 px-2 py-2'>
          {tasks
            .filter(task => task.table === item.id)
            .map(item => (
              <li className='flex z-[1] relative' key={item.id}>
                <p>{item.title}</p>
              </li>
            ))}
        </ul>

        <div className='card-actions justify-center'>
          <button className='btn btn-primary' onClick={open}>
            Add task
          </button>
        </div>
        {isOpen && (
          <Modal onClose={close} title='Add new task'>
            <AddTask close={close} tableId={item.id} />
          </Modal>
        )}
      </div>
    </li>
  );
};
