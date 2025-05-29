import React, { useContext } from 'react'
import { postman } from './App'

const Child4 = () => {
    const data = useContext(postman);
  return (
    <>
    <h1>Name: {data.name}</h1>
    <h1>Age: {data.age}</h1>
    </>
  )
}

export default Child4