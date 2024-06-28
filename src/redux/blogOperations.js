import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBlogThunk = createAsyncThunk('fetchBlog', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('blog');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
export const postBlogThunk = createAsyncThunk('postBlog', async (body, thunkApi) => {
  try {
    await axios.post('blog', body);
    thunkApi.dispatch(fetchBlogThunk());
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
export const editBlogThunk = createAsyncThunk('editBlog', async (body, thunkApi) => {
  try {
    await axios.put(`blog/${body.id}`, body);
    thunkApi.dispatch(fetchBlogThunk());
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
