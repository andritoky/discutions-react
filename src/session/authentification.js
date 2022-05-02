import { verifyCookie } from "../requette/loginRequette";

let authSession = false

export let isAuthSession = async () => {
    authSession = true  
}
export let isAuthCookieSession = async () => {
    let reponse = await verifyCookie()
    if(reponse === true){
        authSession = true
        return authSession
    }
    else {authSession = false}
}

export let isNotAuthSession = () => {
    authSession = false
}

export let getAuthSession = () => authSession