import { useEffect, useState } from "react";
import AddTodo from "../add-todo/AddTodo";
import { deleteTodo, getTodo } from "../services/service";

const TodoList = () =>
{

const [todos,setTodos] = useState([]);

useEffect(()=>{
fetchTodos();
},[])

async function fetchTodos(){
const response = await getTodo();
const jsonResposne = await response.json();
setTodos(jsonResposne.body);
}

async function deleteItem(id){
   const response = await deleteTodo(id);
//    const json = await response.json();
   console.log(response);
}

return(
todos &&
<>
<div className="todoListContainer">
    
    <div className="header">
        Welcome To TODO App... Add your tasks and enhance your productivity :)
    </div>
    <ul>
    {todos.map((item,index)=>(
            <li key={index}>{item.name} &nbsp; &nbsp; 
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            </li>
    ))}
    </ul>
    <AddTodo/>

 </div>
</>)
}

export default TodoList;