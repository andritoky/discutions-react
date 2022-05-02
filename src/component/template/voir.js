import React from 'react'
import "../css/voir.css"
import {useParams} from 'react-router-dom'
import { useState , useEffect} from 'react';
import { showOneClient } from '../requette/clientRequette';

function Voir (){

   let { id } = useParams();
   let [client , setClient] = useState({}) 
   let [zone , setZone] = useState([]) 
   let [zoneNb , setZoneNb] = useState() 
   let [url , setUrl] = useState()
   
   useEffect(()=>{
      showClient()
      showZone()
   },[])
   
   async function showClient(){
        let data = await showOneClient(id)
        data.status
        ? console.log(data.status) : setClient(data)
        setUrl("http://localhost:4000/uploads/" + data.image)
    }

    async function showZone(){
        let reponse = await fetch('/clients/voir-zone/'+ id)
        if(reponse.ok){
            let data =  await reponse.json()
            setZone(data)
            setZoneNb(data.length)
         }else{
            console.log("return : " + reponse.status);
        }
    }

   return (
            <div className="block-voir">
               <div className="box-voir">
                  <h3>Client : {client.nom}</h3>
                  <br/>
                  <span>ID : {id}</span><br/>
                  <span>Adresse : {client.adresse}</span><br/>
                  <span>Description : {client.description}</span><br/>
                  <div className = "box-image">
                       <img src= {url} alt="chosen" style={{width:'100%'}}/>
                  </div>
                  
                  <div className = "box-zone">
                    <h3>Zone : {zoneNb}</h3>
                    <table className ="tableau">
                      <tbody>
                        {
                            zone.map(( client , index ) => {
                                return(
                                        <tr key = {index}>
                                                
                                            <td>{client.identification}</td>
                                            <td>{client.info}</td>
                                            <td>{client.type}</td>
                                            <td className = "right">
                                                <button className ="btn btn-dark btn-edit"  >edit</button>
                                                <button className ="btn btn-danger"  >sup</button>
                                            </td>
                                    
                                        </tr>
                                )
                            })
                        }
                      </tbody>
                    </table>
                  </div>
               </div>
               
            </div>
        )
    
}

export default Voir

