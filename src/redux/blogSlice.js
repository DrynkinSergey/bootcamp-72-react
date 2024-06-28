import { createSlice } from '@reduxjs/toolkit';
import { fetchBlogThunk } from './blogOperations';

const initialState = {
  items: [],
  isLoading: false,
};

const slice = createSlice({
  name: 'blog',
  initialState,
  selectors: {
    selectItems: state => state.items,
  },
  extraReducers: builder => {
    builder.addCase(fetchBlogThunk.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const blogReducer = slice.reducer;
export const { selectItems } = slice.selectors;
