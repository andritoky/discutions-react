import React from 'react'
import "../../css/bootstrap/bootstrap.min.css"
import "./listeUsers.css"
import { useState , useEffect } from 'react';
import { getAllUsers } from '../../requette/usersRequette';
import { verifyDiscution } from '../../requette/discution';
import { getUserSession } from '../../session/userSession';
import { useNavigate } from 'react-router-dom';

function ListeUsers (){

    let [users , setUsers] = useState([])
    let navigate = useNavigate()

    useEffect(()=>{
        getListeUsers()
    },[])

    async function getListeUsers() {
        let data = await getAllUsers()
        setUsers(data)
        console.log('listeUsers : ', data);
    }

    async function clickOnUserListe (id) {
        let id_TX =  getUserSession()
        let id_RX = id
        let data = {
            id_emeteur : id_TX._id,
            id_recepteur : id_RX
        }
        let discution_id = await verifyDiscution(data)
        console.log("discution_id :", discution_id);
        navigate('/dashbord/discution/'+ discution_id)
    }

    

    return (
         <div>
            {users.map((user , key) =>{
                return (<div className='box-my-user' key = {key}  onClick = {()=> {clickOnUserListe(user._id)}}>
                         <div className='my-user'>
                            <div className='profile'>
                               <img src= "/image/profile2.jpg" alt="my-tag"></img>
                            </div>
                            <div className='user-info'> 
                                <span className='user-nom'>{user.nom}</span> 
                                <p className='last-msg'>last message de ma liste</p>
                                <span className='last-msg-time'>4 min ago</span>
                            </div>
                        </div>
                    </div>)
            })}
        </div>
    )
    
    
         
}

export default ListeUsers