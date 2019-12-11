import React from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // const [specialValue, setSpecialValue] = useState(specials);

  return (
    <div>
      {specials.map(special => (
        <SpecialButton text={special} />
      ))}
    </div>
  );
};

export default Specials;
