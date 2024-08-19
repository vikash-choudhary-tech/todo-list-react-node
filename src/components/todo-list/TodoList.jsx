import { useEffect, useState } from "react";
import AddTodo from "../add-todo/AddTodo";
import { deleteTodo, getTodo } from "../services/service";
import styles from "./TodoList.module.css";
import EditTodo from "../edit-todo/EditTodo";

const TodoList = () =>
{

const [todos,setTodos] = useState([]);
const [isEditable, setIsEditable] = useState(false);
const [selectedItem, setSelectedItem] = useState();

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

function editItem(item){
    if(item)
    setIsEditable(true);
    else setIsEditable(false)
    setSelectedItem(item);
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
            <button onClick={()=> editItem(item)}>Edit</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            </li>
    ))}
    </ul>

    {isEditable && <EditTodo person = {selectedItem} />}

 </div>



</>)
}

export default TodoList;