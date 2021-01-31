import { createEvent, createStore } from 'effector';

export const $loading = createStore(false);

export const setLoading = createEvent();

$loading.on(setLoading, (_, newState) => newState);
