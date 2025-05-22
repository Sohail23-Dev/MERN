import React from "react";

const Card = ({imgsrc, name, age})=>{
    return (
        <>
        <img src={imgsrc} alt="Images" height={"200px"}  width={'200px'}/>
        <h1 className="text-5xl">Name: {name}</h1>
        <h4>Age: {age}</h4>
        </>
    );
}

export default Card;