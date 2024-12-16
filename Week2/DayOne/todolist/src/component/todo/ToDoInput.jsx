export default function ToDoInput({setValue, value}){
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(event) => {
                    setValue(event.target.value)
                }}
            />

            <button type="submit">Add</button>
        </div>
    )
}