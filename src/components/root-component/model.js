import { createEvent, createStore } from 'effector';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

export const addLimit = createEvent();
export const deleteLimit = createEvent();

export const $limits = createStore(initialState);

$limits
  .on(addLimit, (state) => {
    return [...state, { id: uuidv4(), rules: [] }];
  })
  .on(deleteLimit, (state, deleteId) => {
    return state.filter(({ id }) => id !== deleteId);
  });

$limits.watch((state) => {
  console.log(state);
});
