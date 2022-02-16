import React from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  asyncIncrement,
  asyncDecrement,
} from "./store/counter";

const Counter = ({
  value,
  increment,
  decrement,
  asyncIncrement,
  asyncDecrement,
}) => {
  return (
    <>
      <div>Value: {value}</div>
      <div>
        <button onClick={() => increment()}> + </button>
        <button onClick={() => asyncIncrement()}> Async + </button>
        <button onClick={() => decrement()}> - </button>
        <button onClick={() => asyncDecrement()}> Async - </button>
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
  asyncIncrement,
  asyncDecrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
