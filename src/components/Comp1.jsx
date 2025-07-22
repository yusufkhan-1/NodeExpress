import React from "react";
import Comp2 from "./Comp2";

const Comp=()=>{
    const user={name:"john",age:30}
    return(
        <><h2>Prop drilling </h2>
        <Comp2 user={user} />
        </>

    )     
        }
  export default comp1;      
    
