import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodo } from '../slice';

const AddTodo = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    function handlerTodo(){
        if(text.trim() === "") return;
        dispatch(addTodo({text: text}))
        setText("")
    }
  return (
    <>
    <h1>Add Todo</h1>
    <input type='text' value={text} onChange={(e)=> setText(e.target.value)} placeholder='Add Your Task'></input>
    <button onClick={handlerTodo}>Add</button>
    </>
  )
}

export default AddTodo