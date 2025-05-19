// Action Types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// Action Interfaces
interface IncrementAction {
  type: typeof INCREMENT;
  [key: string]: string;
}

interface DecrementAction {
  type: typeof DECREMENT;
  [key: string]: string;
}

// Union type for all counter actions
export type CounterActionTypes = IncrementAction | DecrementAction;

// Action Creators
export const incrementCounter = (): CounterActionTypes => ({
  type: INCREMENT,
});

export const decrementCounter = (): CounterActionTypes => ({
  type: DECREMENT,
});
