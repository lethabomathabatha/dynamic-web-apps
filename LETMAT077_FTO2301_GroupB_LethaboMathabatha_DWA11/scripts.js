// @ts-check

import { number, subtract, add, reset, resetAlert } from "./modules/dom.js";
import { createCountStore } from "./modules/store.js";
import { increment, decrement } from "./modules/actions.js";
import { reducer, initialState } from './modules/reducers.js';

const MAX_NUMBER = 50
const MIN_NUMBER = -25
const STEP_AMOUNT = 1; 
const DEFAULT = 0;

const store = createCountStore(reducer, initialState);

const render = () => {
  const state = store.getState();
  number.value = state.counter;

  subtract.disabled = state.counter <= MIN_NUMBER;
  add.disabled = state.counter >= MAX_NUMBER;
};

store.subscribe(render);

const subtractHandler = () => {
  store.dispatch(decrement(STEP_AMOUNT));
};

const addHandler = () => {
  store.dispatch(increment(STEP_AMOUNT));
};

const resetHandler = (e) => {
  e.preventDefault();
  store.dispatch(decrement(store.getState().counter));
  resetAlert.show();
};

subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);
reset.addEventListener('click', resetHandler);
