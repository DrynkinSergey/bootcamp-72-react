import { createStore } from 'redux';
import { counterReducer } from './counter/reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

const enhancer = devToolsEnhancer();
// Store - сукупність стейта і його функцій (REDUCERS)
export const store = createStore(counterReducer, enhancer);

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
