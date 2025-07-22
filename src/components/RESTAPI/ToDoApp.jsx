import React from "react";

import { useState,useEffect } from "react";
import { getTodos,addTodo,UpdateTodo,deleteTodo } from "./service";

const TodoApp=()=>{
    const [todos,setTodos]=useState([]);
    const [task,setTask]=useState("");
    const [editing,setEditing]=useState(null);

    useEffect(()=>{
        getTodo();
    })
    // load todos
    const getTodo=async()=>{
        const response = await getTodos();
        setTodos(response.data);
    }
    //edit todo
     const handleEdit=async(todo)=>{
        setEditing(todo.id);
        setTask(todo.title);
     }
    //delete todos
    const handleDelete=async(x)=>{
        const response=await deleteTodo(x);
        if(response.status===200){
            alert("Todo deleted successfully ");
            getTodo();
        }

    }
    const handleSubmit=async()=>{
        if(!task) return alert("please enter a task")
    }

    

    return(
        <>
      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={handleSubmit}>{editing ? 'Update':'Add'}</button>
        
        <h2>The Todo List is</h2>
        <ul>
        {
            todos.map((todo))=>(
                <li key={todo.id}>{todo}
                <button onClick={()=>{handleEdit(todo)}}>Edit</button>
                <button onClick={()=>{handleDelete(todo)}}>Delete</button>
                </li>
            )
        }
        </ul>
        
        </>
    )
}
export default TodoApp