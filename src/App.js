import React, { useState } from "react";
import "./App.scss";
// import NumberButton from "./components/ButtonComponents/NumberButtons/NumberButton";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [displayValue, setDisplayValue] = useState("");
  const addNumber = number => {
    setDisplayValue(displayValue => displayValue + number);
  };

  const addOperator = operator => {
    if (operator === "=") {
      setDisplayValue(displayValue => eval(displayValue));
    } else {
      setDisplayValue(displayValue + " " + operator + " ");
    }
  };
  // const addSpecial = special => {};

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}

        <Display number={displayValue} />
        <Specials />
        <Numbers addNumber={addNumber} />
        <Operators addOperator={addOperator} />
      </div>
    </div>
  );
}

export default App;
