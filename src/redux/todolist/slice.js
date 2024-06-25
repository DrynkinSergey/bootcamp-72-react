import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [{ id: 1, todo: 'Learn redux', completed: false }],
};

const slice = createSlice({
  name: 'todolist',
  initialState,
  selectors: {
    selectTodos: state => state.items,
  },
  reducers: {
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      item.completed = !item.completed;
    },
    // addTodo: (state, action) => {
    //   state.items.push(action.payload);
    // },
    addTodo: {
      prepare: todo => {
        return {
          payload: {
            id: nanoid(),
            completed: false,
            todo,
            createdAt: new Date().toLocaleDateString(),
          },
        };
      },
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
    },
  },
});

export const todosReducer = slice.reducer;
export const { deleteItem, addTodo, toggleTodo } = slice.actions;
export const { selectTodos } = slice.selectors;
