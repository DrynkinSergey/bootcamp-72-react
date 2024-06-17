import s from './Skeleton.module.scss';
export const SkeletonCard = () => {
  return (
    <div className={s.card}>
      <p className={s.skeleton_title}></p>
      <p className={s.skeleton_subtitle}></p>
    </div>
  );
};
