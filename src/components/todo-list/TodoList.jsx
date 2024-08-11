import { useEffect, useState } from "react";
import AddTodo from "../add-todo/AddTodo";
import { deleteTodo, getTodo } from "../services/service";
import styles from "./TodoList.module.css";

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
   console.log(response);
}

return(
todos &&
<>
<div className = {styles.container}>
    <div className={styles.header}>
        Welcome To TODO App... Add your tasks and enhance your productivity :)
    </div>
    <AddTodo/>
    <ul className={styles.list}>
    {todos.map((item,index)=>(
            <li key={index} className={styles.listItem}>{item.name} &nbsp; &nbsp; 
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            </li>
    ))}
    </ul>

 </div>
</>)
}

export default TodoList;