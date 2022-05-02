import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMyDiscution } from '../../../requette/discution'
import { getUserSession } from '../../../session/userSession'
import "./conversation.css"
import "../setting/setting.css"
import Pusher from 'pusher-js'
import { getSendToSession } from '../../../session/sendToSession'
import TimeAgo from 'timeago-react'
import { useSelector } from 'react-redux'
import { appSelector } from '../../../store/app/appSelectors'


var pusher = new Pusher('f3f919f78d1f3d88c1b0', {
  cluster: 'ap2'
});

function Conversation (){
   let {id} = useParams()
   let [message , setMessage] = useState([])
   let [user , setUser] = useState({})
   let my_box_msg = useRef(null)
   let send_to = getSendToSession()

   let appStore = useSelector(appSelector)
   let theme = appStore.theme.msgClass

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
    setMessage(msg)
  }
  
  function realtimePusher() {
     var channel = pusher.subscribe('messages');
         channel.bind('newMessage', function() {
          //  console.log("Changement message !!");
           myMessage()
    });
  }
  // throw new Error()
  return (
            <div className='block-msg' >
               {message.map((msg , key) =>{
                   var date = new Date(msg.time)
                   var myClassePosition = "box-msg",
                       myClasseColor =  theme,
                       profile = "profile-left",
                       time = "time"

                   if(msg.user.user_id == user._id){
                       myClassePosition = "box-msg-right"
                       myClasseColor = 'msg-text-right'
                       profile = "profile-right"
                       time = "time-right"
                   }
                   return (<div className={ myClassePosition }  key = {key} ref={ my_box_msg }>
                              
                               <div className={profile}>
                                    <img src={"/uploads/"+ msg.user.profile} alt="my-tag"></img>
                               </div>
                               <div className={time}><TimeAgo datetime = {msg.time} locale='us'/></div>
                               <div className={ myClasseColor }>
                                    { msg.message }
                                </div>
                               
                               
                       </div>)
               })}
           </div>
   )
}

export default Conversation