import { getUserSession } from "../session/userSession";
import { dbUsers } from "./db";

let myHeaders = new Headers({
    'Accept': 'application/json',
    "Content-Type": "application/json",
    "Apikey": "rthtjtjdfhgfjhfctdfhtfjffjdjdjdjsj",
});

export let addUsers = async (data) =>{
    let requestOption = {
        method : "POST",
        headers : myHeaders,
        body : JSON.stringify(data)
    }
    let reponse = await fetch('/users/add' , requestOption)
    let parse = await reponse.json()
    return parse
}
export let getMyUser = async (id) =>{
    let reponse = await fetch('/users/find/'+ id  , {headers : myHeaders})
        if(reponse.ok){
            let data =  await reponse.json()
            return data.data
        }
        else {
             return {messge:'Error server ne repond pas'}
         }
}

export let getAllUsers = async () =>{
    let user = getUserSession()
    let reponse = await fetch('/users/liste-users/'+ user._id , {headers : myHeaders})
        if(reponse.ok){
            let data =  await reponse.json()
            return data.data
        }
        else {
              return dbUsers
         }
}

export let searchUsers = async (data_search) =>{
    let reponse = await fetch('/users/search/'+ data_search ,{headers : myHeaders})
    let data = await reponse.json()
    return data.data
}