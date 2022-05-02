import React, { useRef } from 'react'
import { useParams } from 'react-router-dom';
import "../../css/bootstrap/bootstrap.min.css"
import "./conversation-input.css"
import { getUserSession } from '../../session/userSession';
import { newMessage } from '../../requette/discution';


function ConversationInput (){
   let { id } = useParams();
   let input = useRef(null)

   async function sendMessage(id) {
       let message = input.current.value
       let user = getUserSession()
       let data = {
            message: message,
            user: {
                user_id : user._id,
                nom: user.nom,
                time :  new Date()
            }
    }
       console.log('new message' , id , data);
       newMessage(id , data)
   }

   return (
           <div className='box'>
                <div className='box-input'>
                    <input type ="text"  ref={input} className='form-control' placeholder='  Ecrire message ...'/>
                </div>
                <div className='box-send'>
                    <button className='btn btn-primary' onClick={() => {sendMessage(id)}} >Send</button>
                </div>
            </div>
          )
}

export default ConversationInput