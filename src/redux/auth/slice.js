import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, registerThunk } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectIsLoggedIn: state => state.isLoggedIn,
    selectIsError: state => state.isError,
    selectUser: state => state.user,
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
      });
  },
});

export const authReducer = slice.reducer;
export const { selectIsLoggedIn, selectIsError, selectUser } = slice.selectors;
