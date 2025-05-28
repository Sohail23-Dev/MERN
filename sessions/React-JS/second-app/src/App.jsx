import React, { useMemo, useState } from 'react'
import Child from './Child';
// import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const increment =()=>{
    setCount((prev)=> prev +1);
  }
  console.log("The app has been rendered")

  const sum = ()=>{
    console.log("the expensive function")
    let total = 0;
    for(let i=0; i< 10000000; i++){
      total +=i;
    }
    return total;
  }

  const value = useMemo(sum, []);
  return (
   <>
   <h1>the Sum is: {value}</h1>
   <br />
   <br />
   <p>
    count : {count}
   </p>
   <button onClick={increment}>Update</button>
   <Child/>
   </>
  )
}

export default App