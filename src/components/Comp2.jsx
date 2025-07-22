import React from "react";
import Comp3 from "./Comp3";
                

const Comp2=({user})=>
{
    return(
        <>
        <h2>Prop Drilling</h2>
        <Comp3 user={user}/>
        </>
    )
}
export default Comp2;