import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  isRefresh: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectIsLoggedIn: state => state.isLoggedIn,
    selectIsError: state => state.isError,
    selectUser: state => state.user,
    selectIsRefresh: state => state.isRefresh,
  },
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefresh = false;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isRefresh = false;
      });
  },
});

export const authReducer = slice.reducer;
export const { selectIsLoggedIn, selectIsError, selectUser, selectIsRefresh } = slice.selectors;
