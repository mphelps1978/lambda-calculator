import React from "react";
import "./number-button.scss";
// import Numbers from "./Numbers";
import "../../../App.css";

const NumberButton = props => {
  // console.log("NumberbUtton", props);

  return (
    <button
      className="number-button"
      onClick={() => props.addNumber(props.value)}
    >
      {props.value}
    </button>
  );
};
export default NumberButton;
