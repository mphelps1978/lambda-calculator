import React from "react";
import Numbers from "./Numbers";
import "../../../App.css";

const NumberButton = props => {
  // console.log("NumberbUtton", props);

  return (
    <button
      onClick={() => props.addNumber(props.value)}
      className="number-buton"
    >
      {props.value}
    </button>
  );
};
export default NumberButton;
