import * as Api from "./../services/api.js"
import * as ServiceSession from "./../services/sessionStorage.js"

export const authUser = async function () {
    const user = ServiceSession.getSession("currentUser")
    const {userRol} = await Api.getDataById("users", user)
    console.log(userRol);
    return userRol
}

