import React from "react";
import Operators from "./Operators";

const OperatorButton = props => {
  // console.log(props);
  return (
    <>
      <button>{props.operator.char}</button>
    </>
  );
};

export default OperatorButton;
