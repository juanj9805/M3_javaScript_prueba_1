export const setSession = function(key, value){
    return sessionStorage.setItem(key, JSON.stringify(value))
}

export const getSession = function(key){
    const value = JSON.parse(sessionStorage.getItem(key)) 
    return value
}