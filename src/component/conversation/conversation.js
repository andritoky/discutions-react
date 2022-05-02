import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMyDiscution } from '../../requette/discution'
import { getUserSession } from '../../session/userSession'
import "./conversation.css"
// import Pusher from 'pusher-js/types/src/core/pusher'
import Pusher from 'pusher-js'

var pusher = new Pusher('f3f919f78d1f3d88c1b0', {
  cluster: 'ap2'
});

function Conversation (){
   let {id} = useParams()
   let [message , setMessage] = useState([])
   let [user , setUser] = useState({})
   let my_box_msg = useRef(null)

   useEffect(()=>{
       getUser()
       myMessage()
       realtimePusher()
   },[id])

   async function getUser() {
     let user =  getUserSession()
     setUser(user)
   }
   async function myMessage() {
    let msg = await getMyDiscution(id)
    setMessage(msg.data)
    console.log("Discution data:", msg.data);
  }
  
  function realtimePusher() {
     var channel = pusher.subscribe('messages');
         channel.bind('newMessage', function() {
           console.log("Changement message !!");
           myMessage()
    });
  }
  

  return (
            <div className='block-msg' >
               {message.map((msg , key) =>{
                   var myClassePosition = "box-msg",
                       myClasseColor =  'msg-text';
                   if(msg.user.user_id == user._id){
                       myClassePosition = "box-msg-right"
                       myClasseColor = 'msg-text-right'
                   }
                   return (<div className={ myClassePosition }  key = {key} ref={ my_box_msg }>
                               <span className={ myClasseColor }>{ msg.message }</span>
                       </div>)
               })}
           </div>
   )
}

export default Conversation