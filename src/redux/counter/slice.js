// імпорт функції створення слайсу
import { createSlice } from '@reduxjs/toolkit';

// початковий стан для слайсу
const initialState = {
  counter: 0,
  step: 1,
};

const slice = createSlice({
  // назва
  name: 'counter',
  // стан
  initialState,
  // набір селекторів
  selectors: {
    selectCounter: state => state.counter,
    selectStep: state => state.step,
  },
  // екшени!
  reducers: {
    increment: (state, action) => {
      state.counter += state.step;
    },
    decrement: (state, action) => {
      state.counter -= state.step;
    },
    reset: (state, action) => {
      return initialState;
    },
    changeStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

// повертаємо редьюсер, екшени та селектори
export const counterReducer = slice.reducer;
export const { increment, decrement, reset, changeStep } = slice.actions;
export const { selectCounter, selectStep } = slice.selectors;
