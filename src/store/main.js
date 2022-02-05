import { combineReducers, createStore } from "redux";

import bankReducer from "./bank";
import counterReducer from "./counter";

const rootReducer = combineReducers({
  bank: bankReducer,
  counter: counterReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store);

export default store;
