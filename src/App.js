import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";

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
      return state.balance > 1000
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

const store = createStore(
  bankReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;
window.addMoney = addMoney;
window.withdrawMoney = withdrawMoney;
window.showBalance = showBalance;
window.withdrawAll = withdrawAll;

function App() {
  return (
    <div className="App">
      <span>Counter: </span>
      <div>
        <button> + </button>
        <button> - </button>
      </div>
    </div>
  );
}

export default App;
