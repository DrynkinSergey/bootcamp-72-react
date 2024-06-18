import { createContext, useContext } from 'react';
import { Counter } from './components/Counter/Counter';
import { PostsApp } from './components/PostsApp/PostsApp';
import { Tailwind } from './components/Tailwind';
import { TodoList } from './components/TodoList/TodoList';
import { Header } from './components/Header';
import { AuthContext } from './context/ContextProvider';
import { Login } from './Login';
import { Todos } from './components/Todos/Todos';
import { TodosProvider } from './context/TodosProvieder';

export const AutoContext = createContext();

export const App = () => {
  const { user } = useContext(AuthContext);
  const auto = 'Audi';
  if (!user) {
    return <Login />;
  }
  return (
    <AutoContext.Provider
      value={{
        auto: 'Audi',
        model: 'RS6',
        engine: '5.0',
        sayHello: name => {
          console.log(`Hello ${name}`);
        },
        data: [
          {
            id: 1,
            title: 'Test',
            body: 'Test',
          },
        ],
      }}
    >
      <Header />
      <TodosProvider>
        <Todos />
      </TodosProvider>
      {/* <Tailwind /> */}
    </AutoContext.Provider>
  );
};
export default App;
