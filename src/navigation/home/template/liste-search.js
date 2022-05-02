import React from 'react'
import "../css/bootstrap/bootstrap.min.css"
import "../css/liste.css"
import { useState , useEffect  } from 'react';
import {useHistory , useParams} from 'react-router-dom'
import  Loading  from "../component/loading.js";
import  TabHead  from "../component/tabhead.js";
import search from './search';
import { searchClient } from '../requette/clientRequette';

function Search (){
    
    let { data_search } = useParams();
    
    let [listeSearch , setListeSearch] = useState([]) 
    let [nb_result , setNb_result] = useState(0) 

    let history = useHistory()

    let [loading , setLoading] = useState(true)

    useEffect(()=>{
        getAll(data_search) 

    },[data_search])

        
    async function getAll(search){
        let data = await searchClient(search)
        if(!data.status){
            console.log('data_search' , data);
            setListeSearch(data)
            setNb_result(data.length)
            setLoading(false)
            
        }else{
            console.log("search error : " + data.status);
        } 
        
    }
    
    async function supClient(id , index){
        console.log(id);
        let reponse = await fetch('/clients/sup/'+ id +'')
        let data = reponse.json()
        console.log(data)
        console.log(index)
    }
    
    async function voirClient(id){
        console.log(id);
        let url = "/voir/"+id
        history.push(url)
    }

    async function editClient(id){
        console.log(id);
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
                            listeSearch.map(( client , index ) => {
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
            <div className="alert alert-primary">{nb_result} resultat</div>
            </div>
            </div>
        )
}

export default Search 