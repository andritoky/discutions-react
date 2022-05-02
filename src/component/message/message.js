import React from 'react'

import Conversation from '../conversation/conversation'
import ConversationInput from '../conversation-input/conversation-input'
import "./message.css"
function Message (){
    
   return (
            <div className='message'>
                 <div className='message-block'>
                      <div className='msg-bl'>
                         <Conversation/>
                         
                      </div>
                 </div>
                 <div className='message-input'>
                      <div className='msg-inp'>
                          <ConversationInput/> 
                      </div>
                 </div>
            </div>
          )
}

export default Message