import React, { useEffect, useState } from 'react'
import "./conversation-nav.css"
import { FaVideo , FaPhoneAlt , FaUserCircle , FaUserAlt} from "react-icons/fa";
import { getSendToSession } from '../../../session/sendToSession';
import { useParams } from 'react-router-dom';

function ConversationNav ({afficheMenus}){
  
  let {id} = useParams()
  let [send , setSend] = useState({})

  useEffect(()=>{
    getSendTo()
  },[id])

  function getSendTo() {
    let send_to = getSendToSession()
    setSend(send_to)
  }

   return (
            <div className='block-nav'>
                <div className='box-nav'>
                    <h3  className ="send-nom" >To: {send.nom}</h3>
                    <div className="box-stream">
                        <div className='icone'><FaPhoneAlt /></div>
                        <div className='icone'><FaVideo /></div>
                        <button className='btn btn-dark liste-chat' onClick={()=> {afficheMenus()}}><FaUserAlt /></button>
                    </div>
                </div>
                
            </div>
          )
}

export default ConversationNav