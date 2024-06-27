import { createSlice, isAnyOf, nanoid } from '@reduxjs/toolkit';
import { addTodoThunk, deleteThunk, fetchDataThunk, toggleTodoThunk } from './operations';
import toast from 'react-hot-toast';

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: 'todolist',
  initialState,
  selectors: {
    selectTodos: state => state.items,
    selectIsLoading: state => state.isLoading,
    selectIsError: state => state.isError,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(toggleTodoThunk.fulfilled, (state, action) => {
        const item = state.items.find(item => item.id === action.payload);
        item.completed = !item.completed;
      })

      .addMatcher(
        isAnyOf(addTodoThunk.pending, toggleTodoThunk.pending, deleteThunk.pending, fetchDataThunk.pending),
        (state, action) => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(addTodoThunk.fulfilled, deleteThunk.fulfilled, toggleTodoThunk.fulfilled, fetchDataThunk.fulfilled),
        (state, action) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(addTodoThunk.rejected, deleteThunk.rejected, toggleTodoThunk.rejected, fetchDataThunk.rejected),
        (state, action) => {
          state.isError = action.payload;
          state.isLoading = false;
        }
      );
  },
});

export const todosReducer = slice.reducer;

export const { selectTodos, selectIsError, selectIsLoading } = slice.selectors;
