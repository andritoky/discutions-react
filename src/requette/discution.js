
// import store from "../store";
// import { ajoutFetchListeAction, getListeAction } from "../store/listeActions";
// import { listeSelector } from "../store/listeSelectors";

let myHeaders = new Headers({
    'Accept': 'application/json',
    "Content-Type": "application/json",
    "Apikey": "rthtjtjdfhgfjhfctdfhtfjffjdjdjdjsj",
  });

export let verifyDiscution = async (data)  => {
    let requestOption = {
        method : "POST",
        headers : myHeaders,
        body : JSON.stringify(data)
    }
    let reponse = await fetch('/discutions/verify-discution' , requestOption)
    let parse = await reponse.json()
    return parse.data
}

export let newMessage = async (conversation_id , data)  => {
    let requestOption = {
        method : "POST",
        headers : myHeaders,
        body : JSON.stringify(data)
    }
    let reponse = await fetch('/discutions/new-message/'+ conversation_id , requestOption)
    let parse = await reponse.json()
    return parse
}

export let getMyChannel = async (user_id)  => {
    let reponse = await fetch('/discutions/my-channel/'+ user_id , {headers : myHeaders})
    let parse = await reponse.json()
    return parse.data
}

export let getMyDiscution = async (conversation_id)  => {
    let reponse = await fetch('/discutions/my-discution/'+ conversation_id , {headers : myHeaders})
    let parse = await reponse.json()
    return parse.data
}

