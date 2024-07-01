import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://667d0cc0297972455f633f0e.mockapi.io/';

export const fetchTransactionsThunk = createAsyncThunk('fetchAll', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('/transactions');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addTransactionThunk = createAsyncThunk('addTransaction', async (transaction, thunkApi) => {
  try {
    const { data } = await axios.post('/transactions', transaction);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteTransactionThunk = createAsyncThunk('deleteTransaction', async (id, thunkApi) => {
  try {
    await axios.delete(`transactions/${id}`);
    return id;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const editTransactionThunk = createAsyncThunk('editTransaction', async (transaction, thunkApi) => {
  try {
    const { data } = await axios.put(`transactions/${transaction.id}`, transaction);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
