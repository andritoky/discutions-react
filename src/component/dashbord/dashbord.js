import React from 'react'
import "./dashbord.css"
import {Routes, Route} from 'react-router-dom'
import Users from '../users/users.js'
import Message from '../message/message.js'

function Dashbord (){
    
   return (
            <div className='contener-dashbord'>
                <div className='block-dashbord'>
                     <Users/>
                     <Routes>
                              <Route path="discution/:id" element={<Message/>} />
                     </Routes>
                     
                </div>
            </div>
          )
}

export default Dashbord