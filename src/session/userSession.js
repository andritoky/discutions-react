

let userSession = {}

export let setUserSession = async (data) => {
    userSession = data
}

export let getUserSession =  () => userSession


