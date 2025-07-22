import React from "react";

import{useState,useEffect} from "react";

const Curd=()=>{
    const[data,setData]=useState([])
    const[message,setMessage]=useState("")

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(data=>setData(data))
        console.log(data)
    },[] )
    const sendData=()=>{

       fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({message:message})
       }).then(response=>response.json())
        .then(data=>console.log(data)) 
    }

    return(
        <>
        <h2>Curd Operation</h2>

        </>
    )
}
export default Curd