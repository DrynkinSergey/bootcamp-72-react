import { ColorPicker } from './components/ColorPicker/ColorPicker';
import { Counter } from './components/Counter/Counter';
import { TodoList } from './components/TodoList/TodoList';
import Vote from './components/Vote/Vote';

export const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <ColorPicker /> */}
      <TodoList />
      <Vote />
    </div>
  );
};
export default App;
