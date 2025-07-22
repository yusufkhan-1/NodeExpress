import React, { useEffect,useState } from "react";

const MyNewHook=()=>{
    const [form,setForm]=useState({name:'',age:''})
    const[items,setItems]=useState([])

    
    useEffect(()=>{
        console.log("Component mounted or updated");
    },[])

    return(
        <>
        <h2>The use effect hook</h2>
        <form>
            <input type="text" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/>
            <input type="number" value={form.age} onChange={(e)=>setForm({...form,age:e.target.value})}/>
            <button onClick={()=>setItems([...items,`Items ${items.length+1}`])}>AddItems/Data</button>
        </form>

        <ul>{
            items.map((item,index)=>
            <li key={index}>{item}</li>
            )
            
            }

        </ul>
        </>
    )

}
export default MyNewHook;