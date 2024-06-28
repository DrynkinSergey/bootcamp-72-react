import { createSelector, createSlice, isAnyOf, nanoid } from '@reduxjs/toolkit';
import { addTodoThunk, deleteThunk, fetchDataThunk, toggleTodoThunk } from './operations';
import toast from 'react-hot-toast';
import { selectFilter } from '../filterSlice';

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
  testQuery: '',
};

const slice = createSlice({
  name: 'todolist',
  initialState,
  selectors: {
    selectTodos: state => state.items,
    selectIsLoading: state => state.isLoading,
    selectIsError: state => state.isError,
  },
  reducers: {
    setTestValue: (state, action) => {
      state.testQuery = action.payload;
    },
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

export const selectUncompletedTodosMemo = createSelector([slice.selectors.selectTodos], todos => {
  console.log('UNCOMPLETED LOGIC');
  return todos.reduce((total, item) => (item.completed ? total : total + 1), 0);
});

export const selectFilteredDataMemo = createSelector([selectFilter, slice.selectors.selectTodos], (filter, items) => {
  console.log('FILTER LOGIC');
  switch (filter) {
    case 'all':
      return items;
    case 'active':
      return items.filter(item => !item.completed);
    case 'completed':
      return items.filter(item => item.completed);
    default:
      break;
  }
});

export const selectFilteredData = state => {
  console.log('FILTER LOGIC');
  const filter = selectFilter(state);
  const items = selectTodos(state);
  switch (filter) {
    case 'all':
      return items;
    case 'active':
      return items.filter(item => !item.completed);
    case 'completed':
      return items.filter(item => item.completed);
    default:
      break;
  }
};

export const selectUncompletedTodos = state => {
  console.log('UNCOMPLETED LOGIC');
  const items = selectTodos(state);
  return items.reduce((total, item) => (item.completed ? total : total + 1), 0);
};

export const todosReducer = slice.reducer;
export const { setTestValue } = slice.actions;
export const { selectTodos, selectIsError, selectIsLoading } = slice.selectors;
