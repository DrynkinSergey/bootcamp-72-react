import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: 'all',
};

const slice = createSlice({
  name: 'filter',
  initialState,
  selectors: {
    selectFilter: state => state.filter,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;
export const { selectFilter } = slice.selectors;
