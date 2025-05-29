import React, { createContext } from 'react'
import Child from './Child'

export const postman = createContext();

const App = () => {
  const data= {
    name: "Sohail Shaikh",
    age: 22
  };

  return (
    <postman.Provider value={data}>
    <>
    <Child/>
    </>
    </postman.Provider>
  )
}

export default App