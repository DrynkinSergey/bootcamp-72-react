const initialState = {
  counter: 1000,
  step: 1,
};
// Reducer  - функція , котра керує нашим стейтом, може міняти, додавати, видаляти данні
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
