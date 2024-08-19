// import { useEffect, useState } from "react";
// import { getTodoById } from "../services/service";

const EditTodo = ({ person }) => {

    // const [person, setPerson] = useState();


    // useEffect(()=> {
    //     fetchTodoItemById(id);
    // },[id])


    // async function fetchTodoItemById(id){
    //   const response = await getTodoById(id);
    //   const jsonResponse = await response.json();
    //   setPerson(jsonResponse);
    // }


    return(
        <>
            <div>Edit Todo</div>
            <div>Data : {person.name}</div>
            <div>Data : {person.age}</div>
        </>
    )
}

export default EditTodo;