import React from "react";
import {useState } from "react";


const Test=()=>{
    const [x,setX]=useState(['virat','dhoni','rohit'])
    const [count,setCount]=useState(0)
    const [name,setName]=useState("");

    function submitData(e){
        console.log(e.target.value);
        console.log("the name is: ",name );
    }
    return(
        <>
        <h2>The Name of cricketers is:{x} </h2>
        <h2>The Count Value is:{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>



        <h3>
            The value of name is:{name}
        </h3>
        <input
        type="text"
        value={name}
        onChange={(e)=> setName(e.target.value)}/>
        
        </>
    )
}
export default Test;