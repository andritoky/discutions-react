import { useDispatch, useSelector } from "react-redux";
import {useCallback} from 'react';
import { deleteListeAction, addListeAction, updateListeAction, ajoutFetchListeAction } from "../store/listeActions";
import store from "../store/index"
import { listeSelector } from "../store/listeSelectors";

let myHeaders = new Headers({
    'Accept': 'application/json',
    "Content-Type": "application/json",
    "Apikey": "rthtjtjdfhgfjhfctdfhtfjffjdjdjdjsj",
});

export let getAllClient = async () =>{
    let reponse = await fetch('/clients' , {headers : myHeaders})
        if(reponse.ok){
            let data =  await reponse.json()
            store.dispatch(ajoutFetchListeAction(data))
            return data
        }
        else {
             return {messge:'server ne repond pas'}
         }
}

export let addOneClient = async (data) =>{
    let requestOption = {
        method : "POST",
        headers : myHeaders,
        body : JSON.stringify(data)
    }
    
    let reponse = await fetch('/clients/creer',requestOption)
    let reponse_status = await reponse.json()
    store.dispatch(addListeAction(data))
    return reponse_status
}

export let showOneClient = async (id) =>{
    var client_data 
    let dataStore =  store.getState().liste.clients
        dataStore.map(client => {
              if(client._id == id){
                 client_data = client
              }
            })

        if(dataStore){
            return client_data  
        }else{ return {status:'data_client fail'}}

}

export let editOneClient = async (id ,data) =>{
    let requestOption = {
        method : "POST",
        headers : myHeaders,
        body : JSON.stringify(data)
    }
    let reponse = await fetch('/clients/edit/'+id ,requestOption)
    let reponse_status = await reponse.json()
    store.dispatch(updateListeAction(id , data))
    return reponse_status
}

export let supOneClient = async (id) =>{
    let reponse = await fetch('/clients/sup/'+id , {headers : myHeaders})
    let reponse_status = await reponse.json()
    store.dispatch(deleteListeAction(id))
    return reponse_status
}

export let searchClient = async (data) =>{
    let reponse = await fetch('/clients/search/'+ data ,{headers : myHeaders})
    let reponse_status = await reponse.json()

    return reponse_status
}