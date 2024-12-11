const toDoInput = document.getElementById("toDoInput");
const addBtn = document.getElementById("addBtn");
const toDoList = document.getElementById("toDoList");
const updateBox = document.getElementById("updateBox");

const updateInput = document.getElementById("updateInput");
const updateBtn = document.getElementById("updateBtn");

const list = [{value: "Apple", checked: false}];
const checked = [0]

renderTodo();

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    list.push({value: toDoInput.value, checked: false});
    renderTodo();
})



function renderTodo(){
    toDoList.innerHTML = ""
    toDoInput.value = ""
    list.forEach( (item, idx) => {
        const div = document.createElement("div");
        div.classList.add('flex')
        div.innerHTML = `
            <p class="${item.checked ? "line" : ""}"> ${item.value} </p>
            <button onclick = "deleteItem(${idx})">Delete</button>
            <button onclick = "updateItem(${idx})">update</button>
            <input  onclick = "doneItem(${idx})" type="checkbox" ${item.checked ? "checked": ""}>
            `
        toDoList.append(div);
    })

    const marks = document.getElementsByClassName("item");
    console.log(typeof marks)

    for(i = 0; i < marks.length; i ++){
        marks[i].addEventListener("click", (e) => {
            e.preventDefault()
            this.innerHTML="";
        })
    }

}

function doneItem(idx) {
    list[idx].checked = !list[idx].checked;
    renderTodo();
}

function deleteItem(idx){
    list.splice(idx, 1);
    renderTodo();
}

function updateItem(idx){
    updateBox.classList.remove("disNone");
    updateBtn.addEventListener('click', (e) => {
        console.log(idx);
    
        console.log(list);

        list[idx].value = updateInput.value;
        renderTodo();
    
        console.log(list);
        updateBox.classList.add("disNone");
        // updateInput.value = "";
        updateBtn.removeEventListener("click", this);
    })
    
}



