import * as ServiceAuth from "./../services/auth.js"

export const guard = async function () {
    const currentUserRol = await ServiceAuth.authUser()

          if(currentUserRol === "admin") {
        window.location = "admin.html"
    }

    if(currentUserRol === "user") {
        window.location = "user.html"
    }
}