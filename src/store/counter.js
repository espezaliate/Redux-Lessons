const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const INITIAL_STATE = 0;

function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT:
      return state + (action.value || 1);
    case DECREMENT:
      return state - (action.value || 1);
    default:
      return state;
  }
}

export const increment = (value = 1) => ({
  type: INCREMENT,
  value,
});

export const decrement = (value = 1) => ({
  type: DECREMENT,
  value,
});

export const asyncIncrement = (value = 1) => {
  return (dispatch) =>
    setTimeout(() => {
      dispatch(increment(value));
    }, 1000);
};

export const asyncDecrement = (value = 1) => {
  return (dispatch) =>
    setTimeout(() => {
      dispatch(decrement(value));
    }, 1000);
};

export default counterReducer;
