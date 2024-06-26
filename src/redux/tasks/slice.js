import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'Create redux',
      table: '1',
    },
    {
      id: '2',
      title: 'Create table',
      table: '1',
    },
    {
      id: '3',
      title: 'Create structure',
      table: '2',
    },
  ],
};

const slice = createSlice({
  name: 'tasks',
  initialState,
  selectors: {
    selectTasks: state => state.tasks,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(item => item.id !== action.payload);
    },
    editTask: (state, action) => {
      state.tasks = state.tasks.map(item => (item.id === action.payload.id ? { ...item, ...action.payload } : item));
    },
    moveTask: (state, action) => {
      state.tasks = state.tasks.map(item =>
        item.id === action.payload.id ? { ...item, table: action.payload.table } : item
      );
    },
  },
});

export const tasksReducer = slice.reducer;
export const { selectTasks } = slice.selectors;
export const { addTask, removeTask, editTask, moveTask } = slice.actions;
