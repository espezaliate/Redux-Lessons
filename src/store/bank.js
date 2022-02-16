const ADD_MONEY = "ADD_MONEY";
const WIDTHDRAW_MONEY = "WIDTHDRAW_MONEY";
const WIDTHDRAW_ALL_MONEY = "WIDTHDRAW_ALL_MONEY";
const SHOW_BALANCE = "SHOW_BALANCE";
const SET_BANK_LOADING = "SET_BANK_LOADING";

const INITIAL_STATE = {
  balance: 1500,
  maxWidthdraw: 1000,
  loading: false,
};

function bankReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_MONEY:
      return {
        ...state,
        balance: state.balance + action.payload,
        loading: false,
      };

    case WIDTHDRAW_MONEY:
      if (state.balance < action.payload) {
        alert("Nie masz wytarczających środków na koncie!");
        return state;
      }
      const moneyToWidthdraw =
        action.payload > state.maxWidthdraw
          ? state.maxWidthdraw
          : action.payload;

      return {
        ...state,
        balance: state.balance - moneyToWidthdraw,
        loading: false,
      };

    case WIDTHDRAW_ALL_MONEY:
      return {
        ...state,
        balance: 0,
        loading: false,
      };

    case SHOW_BALANCE:
      console.log(`Twoje saldo wynosi: ${state.balance}`);
      return state;
    case SET_BANK_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

export const addMoney = (money) => {
  return (dispatch) => {
    dispatch({ type: SET_BANK_LOADING });
    setTimeout(() => {
      dispatch({ type: ADD_MONEY, payload: money });
    }, 1000);
  };
};
export const widthdrawMoney = (money) => {
  return (dispatch) => {
    dispatch({ type: SET_BANK_LOADING });
    setTimeout(() => {
      dispatch({ type: WIDTHDRAW_MONEY, payload: money });
    }, 1000);
  };
};
export const widthdrawAllMoney = () => {
  return (dispatch) => {
    dispatch({ type: SET_BANK_LOADING });
    setTimeout(() => {
      dispatch({ type: WIDTHDRAW_ALL_MONEY });
    }, 1000);
  };
};
export const showBalance = () => ({ type: SHOW_BALANCE });

export default bankReducer;
