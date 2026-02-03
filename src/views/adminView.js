import * as Api from "./../services/api.js"
import * as ServiceAuth from "./../services/auth.js"

const taskTableInfo = document.querySelector("#taskTableInfo")

window.addEventListener("DOMContentLoaded", async function(){
    render()
})

    // <button
    // id="edit"
    //   class="btn btn-warning"
    //   data-bs-toggle="modal"
    //   data-bs-target="#editModal">
    //   Edit
    // </button>


const render = async function() {
    const tasks = await Api.getData("tasks")
    tasks.forEach(task => {
        const html = `
            <tr>
                <td><input data-id="${task.id}" type="checkbox"></td>
                <td>${task.taskName} </td>
                <td>${task.taskCategory}</td>
                <td>${task.taskPriority}</td>
                <td>${task.taskStatus}</td>
            </tr>
        `
        taskTableInfo.insertAdjacentHTML("afterend",html )
    });
}

const edit = function () {
    
}

taskTableInfo.addEventListener("click", function(e){
    e.preventDefault()
    if(e.target.classList.contains("btn-success")){
        const id = e.target.dataset.id
    }
})

taskTableInfo.addEventListener("click", function(e){
    e.preventDefault()
    if(e.target.classList.contains("btn-danger")){
        const id = e.target.dataset.id
        alert()
        Api.deleteData("tasks",id)
        render()
    }
})

ServiceAuth.authUser()
