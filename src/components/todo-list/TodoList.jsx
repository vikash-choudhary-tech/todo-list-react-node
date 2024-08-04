import { useEffect, useState } from "react";
import AddTodo from "../add-todo/AddTodo";
import { getTodo } from "../services/service";

const TodoList = () =>
{

const [todos,setTodos] = useState([]);

useEffect(()=>{
fetchTodos();
},[todos])

async function fetchTodos(){
const response = await getTodo();
const jsonResposne = await response.json();
setTodos(jsonResposne.body);
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
            <li key={index}>{item.name}</li>
    ))}
    </ul>
    <AddTodo/>



 </div>
</>)
}

export default TodoList;