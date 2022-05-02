import React from 'react'
import "../css/edit.css"
import {useParams} from 'react-router-dom'
import { useState , useEffect , useRef} from 'react';
import { showOneClient, editOneClient } from '../requette/clientRequette';


function Edit (){

   let { id } = useParams()
   let [client , setClient] = useState({}) 
   let nom = useRef(null),
       adresse = useRef(null),
       description = useRef(null)
   
   useEffect(()=>{
    showClient()
   },[])

  async function showClient(){
        let data = await showOneClient(id)
        data.status
        ? console.log(data.status) : setClient(data)
   }
  
  function updateClient(){
    addClient()
   }

  async function addClient(){

    let client_data = {
        nom : nom.current.value,
        adresse : adresse.current.value,
        description : description.current.value
    }
    console.log(client_data)
    let reponse = await editOneClient(id , client_data)
 
   }


   return (
            <div className="block-edit">
              <div className="box-edit">
                 <h3>Metre a jour : </h3>
                    <label >Entrer Nom   </label>
                    <input ref={nom}  type="text" placeholder = " nom" className="form-control" defaultValue = {client.nom} />
                    <label >Entrer Adresse  </label>
                    <input ref={adresse}  type="text" placeholder = " adresse" className="form-control" defaultValue = {client.adresse} />
                    <label >Entrer Description  </label>
                    <input ref={description}  type="text" placeholder = " description" className="form-control"defaultValue = {client.description} />
                    <br/>
                    <div> <button onClick={() =>updateClient(client._id)} className ="btn btn-primary" >Update</button></div>
                
               </div>
            </div>
        )
    
}

export default Edit

