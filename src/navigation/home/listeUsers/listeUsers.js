import React from 'react'
import "../../../css/bootstrap/bootstrap.min.css"
import "./listeUsers.css"
import { useState , useEffect , useMemo} from 'react';
import { getAllUsers } from '../../../requette/usersRequette';
import { getMyChannel, verifyDiscution } from '../../../requette/discution';
import { getUserSession } from '../../../session/userSession';
import { useNavigate } from 'react-router-dom';
import { setSendToSession } from '../../../session/sendToSession';
import TimeAgo from 'timeago-react'


function ListeUsers ({afficheMenus , afficheUser , afficheChannel }){
    
    let navigate = useNavigate()
    let [my_users , setUsers] = useState([])
    let [my_channels , setChannels] = useState([])

    let users = useMemo(() => my_users ,[my_users])
    let channels = useMemo(() => my_channels,[my_channels])

    useEffect(() => {
        getListeUsers()
        getMyListeChannel()
    },[])

    async function getListeUsers() {
        let data = await getAllUsers()
        setUsers(data)
    }

    async function getMyListeChannel() {
        let data = await getMyChannel(getUserSession()._id)
        setChannels(data)
    }
    
    async function clickOnUserListe (id , user) {
        setSendToSession(user)
        let user_TX =  getUserSession()
        let id_user_RX = id
        let data = {
            id_emeteur : user_TX._id,
            id_recepteur : id_user_RX,
            channel : [
                {
                    ch_id : user_TX._id,
                    nom : user_TX.nom,
                    profile : user_TX.profile
                },
                {
                    ch_id : user._id,
                    nom : user.nom,
                    profile : user.profile
                }
            ]
        }
        let discution_id = await verifyDiscution(data)
        navigate('/dashbord/discution/'+ discution_id)
        afficheMenus()
    }

    function clickOnChannelListe(conversation_id , user) {
        setSendToSession(user)
        navigate('/dashbord/discution/'+ conversation_id)
        afficheMenus()
    }
    
    return (
        <div className='block-user-discurion-liste'>
        {
        afficheUser?  
         <div>
            {users.map((user , key) =>{
                return (<div className='box-my-user' key = {key}  onClick = {()=> {clickOnUserListe(user._id , user)}}>
                         <div className='my-user'>
                            <div className='profile'>
                               <img src={"/uploads/"+user.profile} alt="my-tag"></img>
                            </div>
                            
                            <div className='user-info'> 
                                <span className='user-nom'>{user.nom}</span> 
                                <p className='last-msg'>
                                    {user.email}
                                </p>
                                
                            </div>
                        </div>
                    </div>)
            })}
        </div>
        : ""}

        {
        afficheChannel? 
        <div>
            {channels.map((channel , key) =>{
                    return (<div className='box-my-user' key = {key}  onClick = {()=> {clickOnChannelListe(channel.conversation_id, channel.user)}}>
                            <div className='my-user'>
                                <div className='profile'>
                                <img src={"/uploads/"+channel.user.profile} alt="my-tag"></img>
                                </div>
                                
                                <div className='user-info'> 
                                    <span className='user-nom'>{channel.user.nom}</span> 
                                    <p className='last-msg'>
                                        <span className='last-msg-text'>{channel.last_message.message}</span>
                                    </p>
                                    <span className='last-msg-time'><TimeAgo datetime = {channel.last_message.time} locale='us'/></span>
                                    
                                </div>
                            </div>
                        </div>)
                })}
        </div>
        : ""}
      </div>
      
    )
         
}

export default ListeUsers