import { useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoListShow from "./ToDoListShow";
import ToDoListCount from "./ToDoLIstCount"

const ToDoList = () => {

    const [value, setValue] = useState('');
    const [toDos, setToDos] = useState([])

    function handleSubmit(event) {
        event.preventDefault();

        const newState = [...toDos, value];
        setToDos(newState);

        console.log(toDos);

    }

    return (
        <div>
            <h3>To Do List</h3>
            <form onSubmit={handleSubmit}>

                <ToDoListShow toDos={toDos} />
            
                <ToDoInput setValue={setValue} value={value}/>
            </form>
            <ToDoListCount count={toDos.length} />
           
        </div>
    )

}

export default ToDoList;