import React from "react";
import { useState ,useEffect} from "react";

const UseLocalStorage=(key,initialValue)=>{
    const [value,setValue]=useState(()=>){
        const storedValue=localStorage.getItem(key);

        return storedValue?JSON.parse(storedValue):initialValue;
    }

    useEffect(()=>
        localStorage.setItem('key',JSON.stringify(value)),[value,setValue]
    )
    return(
        <>
        </>
    )

}
export default UseLocalStorage