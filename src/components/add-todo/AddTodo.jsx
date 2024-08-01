import { useState } from "react";
import styles from "./AddTodo.module.css";

const AddTodo = () => {
const [task,setTask] = useState({
    title: "",
    id: null
});

function addNewTask(event){
    event.preventDefault();
    console.log("Form Submitted", event);
    setTask({
        title : "",
        id: null
    });
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