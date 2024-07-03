import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, goitApi, setToken } from '../../config/goitApi';

export const registerThunk = createAsyncThunk('register', async (credentials, thunkApi) => {
  try {
    const { data } = await goitApi.post('users/signup', credentials);
    setToken(data.token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const loginThunk = createAsyncThunk('login', async (credentials, thunkApi) => {
  try {
    const { data } = await goitApi.post('users/login', credentials);
    setToken(data.token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logoutThunk = createAsyncThunk('logout', async (_, thunkApi) => {
  try {
    await goitApi.post('users/logout');
    clearToken();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk('refresh', async (_, thunkApi) => {
  const savedToken = thunkApi.getState().auth.token;

  if (!savedToken) {
    return thunkApi.rejectWithValue('No token exist!');
  }
  try {
    setToken(savedToken);
    const { data } = await goitApi.get('users/me');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
