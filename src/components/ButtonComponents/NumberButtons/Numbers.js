import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/*
import { numbers } from '../../../data'
*/
//Import your array data from the provided data file
const Numbers = props => {
  console.log("Numbers: ", props);
  // STEP 2 - add the imported data to state
  const [buttonValues, setButtonValues] = useState(numbers);
  return (
    <div className="numButtonContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

      buttonValues.map(number => (
        <NumberButton key={number} value={number} addNumber={props.addNumber} />
      ))}

      {/* <NumberButton /> */}
    </div>
  );
};
export default Numbers;
