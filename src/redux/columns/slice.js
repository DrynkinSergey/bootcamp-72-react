import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  columns: [
    {
      id: '1',
      name: 'In progress',
    },
    {
      id: '2',
      name: 'Review',
    },
    {
      id: '3',
      name: 'Done',
    },
  ],
};

const slice = createSlice({
  name: 'columns',
  initialState,
  selectors: {
    selectColumns: state => state.columns,
  },
  reducers: {
    addColumn: (state, action) => {
      state.columns.push(action.payload);
    },
    removeColumn: (state, action) => {
      state.columns = state.columns.filter(item => item.id !== action.payload);
    },
    updateColumn: (state, action) => {
      const itemIndex = state.columns.findIndex(item => item.id === action.payload);
      if (itemIndex === -1) {
        return toast.error(`This column ${action.payload} is not exist!`);
      }
      state.columns[itemIndex] = action.payload;
    },
  },
});

export const columnsReducer = slice.reducer;
export const { selectColumns } = slice.selectors;
export const { addColumn, removeColumn, updateColumn } = slice.actions;
