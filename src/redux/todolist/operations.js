import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://667d0cc0297972455f633f0e.mockapi.io/';

export const fetchDataThunk = createAsyncThunk('fetchData', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('todos');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addTodoThunk = createAsyncThunk('addTodo', async (todo, thunkAPI) => {
  try {
    const { data } = await axios.post('todos', { todo });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteThunk = createAsyncThunk('deleteTodo', async (id, thunkAPI) => {
  try {
    const { data } = await axios.delete(`todos/${id}`);
    return data.id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const toggleTodoThunk = createAsyncThunk('toggleTodo', async (todo, thunkAPI) => {
  try {
    const { data } = await axios.put(`todos/${todo.id}`, { ...todo, completed: !todo.completed });
    return data.id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const fetchDataThunk = () => async dispatch => {
//   try {
//     dispatch(fetchingData(true));
//     const { data } = await axios.get('/todos');
//     dispatch(fetchDataSuccessfully(data));
//   } catch (error) {
//     dispatch(fetchingError());
//   } finally {
//     dispatch(fetchingData(false));
//   }
// };

// export const addTodoThunk = todo => async dispatch => {
//   try {
//     dispatch(fetchingData(true));
//     const { data } = await axios.post('/todos', { todo });
//     dispatch(addTodo(data));
//   } catch (error) {
//     dispatch(fetchingError());
//   } finally {
//     dispatch(fetchingData(false));
//   }
// };
