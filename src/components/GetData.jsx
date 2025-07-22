import React from "react";
import {useState,useEffect} from "react";

const getData=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        fetchDataFromServer();
    },[];)


    const fetchDataFromServer=async()=>{
        try{
            const response=await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            if (response.ok){
                setData(await response.json());
            }
        }
    }
     catch (error){
        console.log("error fetching data:",error);
    }
}