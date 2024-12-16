import ToDoItem from "./ToDoItem";


export default function ToDoListShow({toDos}) {
    return (
        <ul>
            {
                toDos.map((todo, idx) => {
                    return (<ToDoItem todo={todo} key={idx} />)
                })
            }
        </ul>
    )
}