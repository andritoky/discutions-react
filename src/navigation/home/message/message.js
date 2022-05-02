import React from 'react'

import Conversation from '../conversation/conversation'
import ConversationInput from '../conversation-input/conversation-input'
import "./message.css"
import ConversationNav from '../conversation-nav/conversation-nav'
import { ErrorBondary } from '../../errorBondary/errorBondary'
function Message ({afficheMenus}){
    
   return (
            <div className='message'>
                 
                 <div className='message-block'>
                      <div className='msg-bl'>
                      <ErrorBondary>
                           <Conversation/>
                       </ErrorBondary>
                      </div>
                 </div>
                 <ConversationNav afficheMenus = {afficheMenus}/>
                 <div className='message-input'>
                      <div className='msg-inp'>
                          <ConversationInput/> 
                      </div>
                 </div>
            </div>
          )
}

export default Message