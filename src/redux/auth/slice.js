import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  isLoggedIn: false,
  user: {
    name: '',
    email: '',
  },
  usersDB: [],
};

const slice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectUser: state => state.user,
    selectIsLoggedIn: state => state.isLoggedIn,
  },
  reducers: {
    login: (state, action) => {
      const user = state.usersDB.find(
        user =>
          user.email.toLowerCase() === action.payload.email.toLowerCase() &&
          user.password.toLowerCase() === action.payload.password.toLowerCase()
      );
      if (user) {
        state.isLoggedIn = true;
        state.user.email = user.email;
        state.user.name = user.name;
        toast('Welcome back!🔥');
      } else {
        toast.error('Credentials is not valid');
      }
    },
    register: (state, action) => {
      if (state.usersDB.some(user => user.email.toLowerCase() === action.payload.email.toLowerCase())) {
        return toast.error(`User ${action.payload.email} already exist!`);
      }
      state.usersDB.push(action.payload);
      toast('Register successfully!🔥');
    },
    logout: state => {
      state.isLoggedIn = false;
      state.user.name = '';
      state.user.email = '';
    },
  },
});

export const authReducer = slice.reducer;
export const { selectUser, selectIsLoggedIn } = slice.selectors;
export const { login, register, logout } = slice.actions;
