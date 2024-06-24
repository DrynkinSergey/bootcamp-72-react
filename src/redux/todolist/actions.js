import { nanoid } from 'nanoid';
import { ADD_ITEM, DELETE_ITEM } from './constants';

export const deleteItem = id => ({ type: DELETE_ITEM, payload: id });
export const addItem = todo => ({ type: ADD_ITEM, payload: { id: nanoid(), completed: false, todo } });
