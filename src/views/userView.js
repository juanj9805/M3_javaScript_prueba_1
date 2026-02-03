import * as Api from "./../services/api.js"
import * as ServiceSession from "./../services/sessionStorage.js"
import * as ServiceAuth from "./../services/auth.js"


const registerTask = document.querySelector("#registerTask")

registerTask.addEventListener("submit", async function(e) {
    e.preventDefault()
    const taskName = document.querySelector("#taskName")
    const taskCategory = document.querySelector("#taskCategory")
    const taskPriority = document.querySelector("#taskPriority")
    const taskStatus = document.querySelector("#taskStatus")
    const dueDate = document.querySelector("#dueDate")
    const taskDescription = document.querySelector("#taskDescription")

    
    await Api.sendData("tasks", {
        "taskName": taskName.value,
        "taskCategory": taskCategory.value,
        "taskPriority": taskPriority.value,
        "taskStatus": taskStatus.value,
        "taskDueDate": dueDate.value,
        "taskDescription": taskDescription.value,
        "userId": ServiceSession.getSession("currentUser"),
        "taskGenerated": Date(),
        "taskAssignee": ServiceSession.getSession("currentUser")
    })
})

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
                <td>${task.taskName} </td>
                <td>${task.taskCategory}</td>
                <td>${task.taskStatus}</td>
                <td>${task.taskPriority}</td>
                <td>${task.taskDueDate}</td>
                <td>
                <button data-id="${task.id}" id="edit" class="btn btn-success" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal">E</button>
                <button data-id="${task.id}" class="btn btn-danger" >R</button>
                </td>
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