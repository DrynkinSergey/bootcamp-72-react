import { createAction, nanoid } from '@reduxjs/toolkit';

// export const deleteItem = id => ({ type: DELETE_ITEM, payload: id });
// export const addItem = todo => ({ type: ADD_ITEM, payload: { id: nanoid(), completed: false, todo } });

export const deleteItem = createAction('deleteItem');
export const addItem = createAction('addItem', todo => {
  return {
    payload: {
      id: nanoid(),
      completed: false,
      todo,
    },
  };
});
