import React from 'react'

const Card = (props) => {
  return (
    <div>
        <input placeholder='Enter Your Name' onChange={(e)=>props.setName(e.target.value)}></input>
        <p>This is value inside card {props.name}</p>
    </div>
  )
}

export default Card