import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const INITIAL_STATE = 0;

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT:
      return state + (action.value || 1);
    case DECREMENT:
      return state - (action.value || 1);
    default:
      return state;
  }
}

const incrementAction = {
  type: INCREMENT,
};

const decrementAction = {
  type: DECREMENT,
};

const decrementBy5Action = {
  type: DECREMENT,
  value: 5,
};

const increment = (value = 1) => ({
  type: INCREMENT,
  value,
});

const decrement = (value = 1) => ({
  type: DECREMENT,
  value,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;
window.incrementAction = incrementAction;
window.decrementAction = decrementAction;
window.decrementBy5Action = decrementBy5Action;

window.increment = increment;
window.decrement = decrement;

export default store;
