import { React, useState } from "react";

const Coun = () => {
  let [ Values, SetValues ] = useState(0);
  // console.log("The Page has Re-rendered")
  function Inc() {
    SetValues(Values + 1);
  }

  function Dec() {
    SetValues(Values - 1);
  }
  function reset() {
    SetValues(0);
  }
  return (
    <div>
      <h1>Value: {Values}</h1>
      <button onClick={Inc}>+1</button>
      <button onClick={Dec}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Coun;
