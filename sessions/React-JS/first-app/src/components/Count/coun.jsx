import { React, useState, useEffect } from "react";

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



  useEffect(()=>{
    if(Values === 5){
      console.log("Muje Bulaya gya hai")
    }

    return ()=>{
      if(Values === 5){
        console.log("Mera kaam hogya")
      }
    }

  },[Values])
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
