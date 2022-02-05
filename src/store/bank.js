const INITIAL_STATE = {
  balance: 1500,
  maxWithdraw: 100,
};

const ADD_MONEY = "ADD_MONEY";
const WITHDRAW_MONEY = "WITHDRAW_MONEY";
const WITHDRAW_ALL = "WITHDRAW_ALL";
const SHOW_BALANCE = "SHOW_BALANCE";

function bankReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_MONEY:
      return { ...state, balance: state.balance + action.payload };
    case SHOW_BALANCE:
      console.log(state.balance);
      return state;
    case WITHDRAW_MONEY:
      return action.payload > 1000
        ? { ...state, balance: state.balance - 1000 }
        : { ...state, balance: state.balance - action.payload };
    case WITHDRAW_ALL:
      return action.balance > 1000
        ? { ...state, balance: state.balance - 1000 }
        : { ...state, balance: action.balance - action.balance };
    default:
      return state;
  }
}

const addMoney = (money) => ({ type: ADD_MONEY, payload: money });
const withdrawMoney = (money) => ({ type: WITHDRAW_MONEY, payload: money });
const showBalance = { type: SHOW_BALANCE };
const withdrawAll = { type: WITHDRAW_ALL };

export default bankReducer;
