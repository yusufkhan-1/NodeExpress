import React from "react";
 
const EventHandler=()=>{
const submitData=()=>{
    alert("The NAmed Event Handlervis Called")
}
const greet=(name)=>{
    alert("the name is :"+name);
}

    return(
        <>
        <h2>Named Event Handler</h2>
        <button onClick={submitData}>SubmitNameEventHandler</button>
        <h2>Inline Event Handler</h2>
        <button onClick={()=>{alert("This Event is from Inline")}}>Inline Event</button>

        <h2>Passing Arguements in function </h2>
        <button onClick={()=>greet("hello")}>Click Me</button>
        </>
    )
}
export default EventHandler