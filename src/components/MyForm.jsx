// import React from "react";

// const MyForm=()=>{
//     const [userName,setUserName]=useState("");
//     const [email,setEmail]=useState("")

//     const submitData=(e)=>{
//         e.preventDefault();
//         if(userName.trim()==""|| email.trim()==""){
//             alert("please fill the data fully")
//         }
//         else{
//             var x=promt("are u sure u wanna submit data ?")
//         }
//     }
//     return(
//         <>
//         <h2>The Form Data</h2>
//         <form action="">
//             <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}>
//             <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}>
//             <button onClick={sumbitData}>SubmitForm</button>

//         </form>
//         </>
//     )
// }