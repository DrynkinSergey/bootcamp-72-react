import { List } from './List';
import s from './PostsApp.module.scss';
import { SearchBar } from './SearchBar';
export const PostsApp = () => {
  return (
    <div>
      <SearchBar />
      <List posts={[{ id: 1, title: 'hello', body: 'world' }]} />
    </div>
  );
};
