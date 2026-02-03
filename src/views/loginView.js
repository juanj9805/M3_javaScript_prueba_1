import * as Api from "./../services/api.js"
import * as ServiceSession from "./../services/sessionStorage.js"
import * as ServiceGuard from "./../services/guard.js"

const LoginForm = document.querySelector("#LoginForm")

LoginForm.addEventListener("submit", async function(e){
    e.preventDefault()
    const emailLoginForm = document.querySelector("#emailLoginForm")
    const passwordLoginForm = document.querySelector("#passwordLoginForm")
    const users = await Api.getData("users")

    const found = users.find(user => user.userEmail === emailLoginForm.value.trim() && user.userPassword === passwordLoginForm.value.trim())

    if(!found) return

    ServiceSession.setSession("currentUser", found.id)
    ServiceSession.setSession("isLogged", "yes")

    // ServiceGuard.guard()

    if(found.userRol === "admin") {
        window.location = "admin.html"
    }

    if(found.userRol === "user") {
        window.location = "user.html"
    }
})