import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = props => {
  return (
    <div>
      {operators.map(operator => (
        <OperatorButton
          key={operator}
          operator={operator}
          addOperator={props.addOperator}
        />
      ))}
    </div>
  );
};

export default Operators;
