import clsx from 'clsx';
import s from './Articles.module.css';
export const Filters = ({ filter, setFilter }) => {
  return (
    <div className={s.filtersBtns}>
      <button onClick={() => setFilter('all')} className={clsx('btn', filter === 'all' && 'active')}>
        All
      </button>
      <button onClick={() => setFilter('newest')} className={clsx('btn', filter === 'newest' && 'active')}>
        Newest
      </button>
      <button onClick={() => setFilter('oldest')} className={clsx('btn', filter === 'oldest' && 'active')}>
        Oldest
      </button>
      <button onClick={() => setFilter('liked')} className={clsx('btn', filter === 'liked' && 'active')}>
        Liked
      </button>
    </div>
  );
};
