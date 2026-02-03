import * as Api from "./../services/api.js"

const registerForm = document.querySelector("#registerForm")

registerForm.addEventListener("submit", async function(e) {
    e.preventDefault()

    const nameRegisterForm = document.querySelector("#nameRegisterForm")
    const emailRegisterForm = document.querySelector("#emailRegisterForm")
    const passwordRegisterForm = document.querySelector("#passwordRegisterForm")
    const confirmPasswordRegisterForm = document.querySelector("#confirmPasswordRegisterForm")
    const rolRegisterForm = "user"

    await Api.sendData("users", {
    "userFullName": nameRegisterForm.value,
    "userEmail": emailRegisterForm.value,
    "userPassword": passwordRegisterForm.value,
    "userRol": rolRegisterForm,
    "userJoinDate": Date()
})

    // console.log(
    //     passwordRegisterForm.value,
    //      confirmPasswordRegisterForm.value
    // );
    

    // if(passwordRegisterForm.value === confirmPasswordRegisterForm.value){
    //     const users = await Api.getData("users")

    // }
    
    // alert("Both passwords must to be equal")
    // passwordRegisterForm.value = ""
    // confirmPasswordRegisterForm.value = ""
})