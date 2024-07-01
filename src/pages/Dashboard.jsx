import { CirclePlus } from 'lucide-react';
import { Transactions } from '../components/Transactions/Transactions';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <section className='relative'>
      <Transactions />
      <button onClick={() => navigate('/add')} className='fixed right-10 bottom-10'>
        <CirclePlus size={48} />
      </button>
    </section>
  );
};
