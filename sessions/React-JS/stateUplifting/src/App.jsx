import React, { useState } from 'react'
import Card from './Card'

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <Card name={name} setName={setName}/>
      <p>This Name is comming from Child: {name}</p>
    </div>
  )
}

export default App