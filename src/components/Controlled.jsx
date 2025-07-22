import React from "react";
import { useState,useRef } from "react";


const Controlled=()=>{
    const[inputValue,setInputValue]=useState('')
    const inputRef=useRef()
    const handleUncontrolledInputs=()=>{
        alert(`${inputRef.current.value}`);
    }
    return(
        <>
        <h2>Controlled component</h2>
        <h2>The Value of Inputref is:{inputValue}</h2>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <h2>The Uncontrolled Component</h2>
        <input ref={inputRef}/>
        <button onClick={handleUncontrolledInputs}>Uncontrolled Input</button>
        </>
    )
}

export default Controlled;