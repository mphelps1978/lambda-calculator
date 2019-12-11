import React from "react";
import Operators from "./Operators";

const OperatorButton = props => {
  // console.log(props);
  return (
    <>
      <button
        onClick={() => props.addOperator(props.operator.value)}
        className="number-button"
      >
        {props.operator.char}
      </button>
    </>
  );
};

export default OperatorButton;
