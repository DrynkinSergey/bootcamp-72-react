import { combineReducers, createStore } from 'redux';
import { counterReducer } from './counter/reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { todosReducer } from './todolist/reducer';

const enhancer = devToolsEnhancer();

const rootReducer = combineReducers({
  todos: todosReducer,
  counter: counterReducer,
});

// Store - сукупність стейта і його функцій (REDUCERS)
export const store = createStore(rootReducer, enhancer);

// {
//   counter:{
//     counter:0,
//     step:1
//   },
//   todos:{
//     todos:[],
//     filter: 'all'
//   }
// }
