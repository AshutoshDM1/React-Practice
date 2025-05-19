import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add other reducers here
});

export default rootReducer;