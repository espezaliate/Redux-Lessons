import React from "react";
import { connect } from "react-redux";

const Counter = ({ value }) => {
  return (
    <>
      <div>Value: {value}</div>
    </>
  );
};

const mapStateToProps = (state) => ({
  value: state,
});

export default connect(mapStateToProps)(Counter);
