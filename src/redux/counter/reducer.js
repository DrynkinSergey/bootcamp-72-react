import { CHANGE_STEP, DECREMENT, INCREMENT, RESET } from './constants';

const initialState = {
  counter: 0,
  step: 1,
};
// Reducer  - функція , котра керує нашим стейтом, може міняти, додавати, видаляти данні
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + state.step,
      };
    case DECREMENT: {
      return {
        ...state,
        counter: state.counter - state.step,
      };
    }
    case RESET:
      return {
        counter: 0,
        step: 1,
      };
    case CHANGE_STEP:
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};
