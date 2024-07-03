import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi } from '../../config/goitApi';

export const fetchDataThunk = createAsyncThunk('fetchData', async (_, thunkAPI) => {
  try {
    const { data } = await goitApi.get('tasks');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addTodoThunk = createAsyncThunk('addTodo', async (todo, thunkAPI) => {
  try {
    const { data } = await goitApi.post('tasks', todo);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteThunk = createAsyncThunk('deleteTodo', async (id, thunkAPI) => {
  try {
    const { data } = await goitApi.delete(`tasks/${id}`);
    return data.id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const toggleTodoThunk = createAsyncThunk('toggleTodo', async (todo, thunkAPI) => {
  try {
    const { data } = await goitApi.patch(`tasks/${todo.id}`, { ...todo, completed: !todo.completed });
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
