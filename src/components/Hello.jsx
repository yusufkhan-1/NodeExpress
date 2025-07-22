import React from "react";

import {useState} from "react";

const Hello=()=>{
    const [isActive,setIsActive]=useState(false);
    return(

        <>
        <h2>Ternary  Operation</h2>
        <button onClick={()=>setIsActive(!isActive)}>
            {isActive?"TRUE":"FALSE"}
        </button>
        </>
    )
}

export default Hello;