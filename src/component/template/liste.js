import React from 'react'
import "../css/bootstrap/bootstrap.min.css"
import "../css/liste.css"
import { useState , useEffect  } from 'react';
import {useHistory} from 'react-router-dom'
import  Loading  from "../component/loading.js";
import  Logout  from "./logout.js";
import  TabHead  from "../component/tabhead.js";
import { getAllClient, supOneClient } from '../requette/clientRequette';
import { listeSelector } from '../store/listeSelectors';
import { useSelector } from 'react-redux';

function Liste (){

    let history = useHistory()

    let [loading , setLoading] = useState(true)

    let clientStore = useSelector(listeSelector).clients
    let loadingStore = useSelector(listeSelector).loading

    useEffect(()=>{
        //console.log('listeStore' , clientStore);
        setLoading(loadingStore)
    },[loadingStore])

    
    async function supClient(id , index){
        let reponse = await supOneClient(id)
        console.log(reponse)
    }
    
    async function voirClient(id){
        let url = "/voir/"+id
        history.push(url)
    }

    async function editClient(id){
        let url = "/edit/"+id
        history.push(url)
    }
    
    return (
            
            <div className="block-tableau">
                <div className="box-tableau">
                <table className ="tableau">
                    <TabHead/>
                    <tbody>
                        {
                            clientStore.map(( client , index ) => {
                                return (
                                    
                                    <tr key = {index}>
                                        
                                            <td>{client.nom}</td>
                                            <td>{client.adresse}</td>
                                            <td>{client.description}</td>
                                            <td className = "right">
                                                <button className ="btn btn-primary" onClick = {() =>voirClient(client._id)}>voir</button>
                                                <button className ="btn btn-dark btn-edit" onClick={() =>editClient(client._id , index)} >edit</button>
                                                <button className ="btn btn-danger" onClick={() =>supClient(client._id , index)} >sup</button>
                                            </td>
                                        
                                    </tr>
                                    
                                )
                            })
                        }
                </tbody>
                </table> 
            {loading? <Loading/> :null }    
            </div>
            </div>
        )
}

export default Liste 