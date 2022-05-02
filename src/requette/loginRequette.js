import { setUserSession } from "../session/userSession";

let myHeaders = new Headers({
    'Accept': 'application/json',
    "Content-Type": "application/json",
    "Apikey": "rthtjtjdfhgfjhfctdfhtfjffjdjdjdjsj",
  });

export let postLogin = async (data) =>{
    let requestOption = {
        method : "POST",
        headers : myHeaders,
        body : JSON.stringify(data)
    }
    let reponse = await fetch('/auth/login' ,requestOption)
    let reponse_status = await reponse.json()
    return reponse_status
}

export let logOut = async (data) =>{
    let reponse = await fetch('/auth/logout' , {headers : myHeaders})
    let reponse_status = await reponse.json()
    return reponse_status.logout
}

export let verifyCookie = async ()  => {
    let reponse = await fetch('/auth/verify-cookie' , {headers : myHeaders})
    let data = await reponse.json()
    try{
      if(data.verifyCookie === true){
        setUserSession(data.data)
        
        return true
      }else {return false}
    }catch(e){console.log(e);
    }
}

export let verifyUserToken = async (data_token)  => {
    let requestOption = {
        method : "POST",
        headers : myHeaders,
        body : JSON.stringify({token : data_token})
    }
    let reponse = await fetch('/auth/verify-user-token' , requestOption)
    let data = await reponse.json()
    return data
}