import { createReducer } from '@reduxjs/toolkit';
import { addItem, deleteItem } from './actions';

const initialState = {
  items: [{ id: 1, todo: 'Learn redux', completed: false }],
  filter: 'all',
};

export const todosReducer = createReducer(initialState, builder => {
  builder
    .addCase(addItem, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(deleteItem, (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      // const itemIndex = state.items.findIndex(item => item.id === action.payload);
      // state.items.splice(itemIndex, 1);
    });
});

// export const todosReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case deleteItem.type:
//       return {
//         ...state,
//         items: state.items.filter(item => item.id !== action.payload),
//       };
//     case addItem.type:
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     default:
//       return state;
//   }
// };
