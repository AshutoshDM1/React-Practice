import { INCREMENT, DECREMENT, type CounterActionTypes } from "./counter.types";

// Action Creators
export const incrementCounter = (): CounterActionTypes => ({
  type: INCREMENT,
});

export const decrementCounter = (): CounterActionTypes => ({
  type: DECREMENT,
});
