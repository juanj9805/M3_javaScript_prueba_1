import * as Api from "./../services/api.js"
import * as ServiceAuth from "./../services/auth.js"
import * as ServiceSession from "./../services/sessionStorage.js"

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

const mainContent = document.querySelector("#mainContent")

const toProfile = document.querySelector("#toProfile")

toProfile.addEventListener("click", function(e){
    e.preventDefault()
    mainContent.innerHTML = ""
    
    const html = `
    <div class="row m-5">
            <h4>My Profile</h4>
        </div>
        <div class="row">
        <div class="col-5">
            <div class="card">
                <div class="card-header d-flex justify-content-center p-5">
                    <img class="card-img-top img-fluid" src="./../../assets/person1.png" style="width: 120px;" alt="">
                </div>
                <div class="card-body">
                    <h4 class="card-title text-center">Dr. Sarah Jenkins</h4>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary">System Admin</button>
                    </div>
                    <p class="text-center my-5 border-bottom border-dark-subtle p-3 bg-dark-subtle rounded">sarah.jenkins@crudzaso.edu</p>
                    <div class="d-flex flex-column align-items-center my-5">
                        <h4>154</h4>
                        <p>tasks</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-7">
            <div class="row">
                <div class="col">
                    <div class="d-flex justify-content-between border-dark-subtle border-bottom p-3 mb-4">
                        <h5>Personal information</h5>
                        <button class="btn btn-close-white shadow-sm">Edit profile</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <h5>Full Name</h5>
                    <p>dsa dsa</p>
                </div>
                <div class="col-6">
                    <h5>Employee ID</h5>
                    <p>dsa dsa</p>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <h5>Phone</h5>
                    <p>dsa dsa</p>
                </div>
                <div class="col-6">
                    <h5>Department</h5>
                    <p>dsa dsa</p>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <h5>Role Level</h5>
                    <p>dsa dsa</p>
                </div>
                <div class="col-6">
                    <h5>Join Date</h5>
                    <p>dsa dsa</p>
                </div>
            </div>
        </div>
    </div>
    `
    mainContent.insertAdjacentHTML("afterbegin", html)

})

const logout = document.querySelector("#logout")

logout.addEventListener("click", function(){
    window.location = "login.html"
    ServiceSession.setSession("isLogged", "false")
})