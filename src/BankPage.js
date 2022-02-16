import React, { useState } from "react";
import { connect } from "react-redux";
import { Spinner } from "reactstrap";

import { addMoney, widthdrawMoney, widthdrawAllMoney } from "./store/bank";

const BankPage = (props) => {
  const [amount, setAmount] = useState(100);

  const handleInputChange = (e) => {
    if (e.target.value) {
      setAmount(parseInt(e.target.value, 10));
    }
  };

  return (
    <div className="row mx-0 mt-5 my-2">
      {props.isLoading && (
        <div>
          <Spinner />
        </div>
      )}
      <input type="number" onChange={handleInputChange} value={amount} />
      <button
        type="button"
        disabled={!amount}
        onClick={() => {
          props.addMoney(amount);
        }}
      >
        Add {amount} PLN'y
      </button>
      <button
        type="button"
        disabled={!amount}
        onClick={() => {
          props.widthdrawMoney(amount);
        }}
      >
        Withdraw {amount} PLN'y
      </button>
      <button
        type="button"
        onClick={() => {
          props.widthdrawAllMoney();
        }}
      >
        Withdraw all money
      </button>
      <div>Your balance: {props.myBalance}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.bank.loading,
  myBalance: state.bank.balance,
});

const mapDispatchToProps = {
  addMoney,
  widthdrawAllMoney,
  widthdrawMoney,
};

export default connect(mapStateToProps, mapDispatchToProps)(BankPage);
