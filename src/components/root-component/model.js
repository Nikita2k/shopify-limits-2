import { createEvent, createStore } from 'effector';

const initialState = [];

export const addLimit = createEvent();

export const $limits = createStore(initialState);

$limits.on(addLimit, (state) => {
  const newLimitId = state.length;
  return [...state, { id: newLimitId, rules: [] }];
});

$limits.watch((state) => {
  console.log(state);
});
