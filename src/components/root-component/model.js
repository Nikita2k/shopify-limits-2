import { createEvent, createStore } from 'effector';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const defaultRule = {
  entity: 'cart_price',
  condition: 'less_than',
  value: '333',
};

export const addLimit = createEvent();
export const deleteLimit = createEvent();

export const addRule = createEvent();

export const $limits = createStore(initialState);

$limits
  .on(addLimit, (state) => {
    return [...state, { id: uuidv4(), rules: [] }];
  })
  .on(deleteLimit, (state, deleteId) => {
    return state.filter(({ id }) => id !== deleteId);
  })
  .on(addRule, (state, limitId) => {
    return state.map((limit) => {
      if (limit.id !== limitId) return limit;
      limit.rules.push(defaultRule);
      return limit;
    });
  });

$limits.watch((state) => {
  console.log(state);
});
