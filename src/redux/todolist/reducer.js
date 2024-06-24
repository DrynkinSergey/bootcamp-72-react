import { ADD_ITEM, DELETE_ITEM } from './constants';

const initialState = {
  items: [{ id: 1, todo: 'Learn redux', completed: false }],
  filter: 'all',
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};
