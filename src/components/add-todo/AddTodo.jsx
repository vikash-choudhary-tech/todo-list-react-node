import { useState } from "react";
import styles from "./AddTodo.module.css";
import { addtodo } from "../services/service";

const AddTodo = () => {

const [task,setTask] = useState({
    title: "",
    id: null
});

async function addNewTask(event){
    event.preventDefault();
    console.log("Form Submitted", event);
    setTask({
        title : "",
        id: null
    });

 const response = await addtodo(task);
 const jsonresposne = await response.json();
 console.log("Response from server", jsonresposne);
}

return(
<>
    <div className={styles.container}>
        <div className={styles.header}>
            Add Your Task
        </div>
        <form className={styles.formContainer} onSubmit={addNewTask}>
            <div className={styles.formGroup}>
                <label>Task Name</label>
                <input type="text" value={task.title} onChange={(event)=> setTask({
                    id : Math.random(),
                    title : event.target.value
                })}/>
            </div>
            <div className={styles.formGroup}>
                <button type="submit">Add</button>
            </div>
        </form>
    </div>

</>)
}

export default AddTodo;