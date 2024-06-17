import { Comment } from 'react-loader-spinner';
import s from './PostsApp.module.scss';
export const Loader = () => {
  return (
    <div className={s.loader}>
      <Comment
        visible={true}
        height='200'
        width='200'
        ariaLabel='comment-loading'
        wrapperStyle={{}}
        wrapperClass=''
        color='#fff'
        backgroundColor='#a007ff'
      />
    </div>
  );
};
