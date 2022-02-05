import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./store/counter";

const Counter = ({ value, increment, decrement }) => {
  return (
    <>
      <div>Value: {value}</div>
      <div>
        <button onClick={() => increment()}> + </button>
        <button onClick={() => decrement()}> - </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  value: state.counter,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
