import React, { useState } from 'react'
import "./dashbord.css"
import {Routes, Route} from 'react-router-dom'
import Users from '../users/users.js'
import Message from '../message/message.js'
import Profile from '../profile/profile'
import Image from '../Image/image'

function Dashbord (){

   let [afficheMenusUser , setAfficheMenusUser] = useState(true)

   function  NotAfficheMenus() {
       setAfficheMenusUser(false)
   }
   function  afficheMenus() {
    setAfficheMenusUser(true)
}

   return (
            <div className='contener-dashbord'>
                <div className='block-dashbord'>
                     <div className='user-menus'>
                     <Users/>
                     </div>
                     {afficheMenusUser? 
                        <div className='user-menus2'>
                              <Users afficheMenus = {NotAfficheMenus} />
                        </div>
                     :""}
                     <Routes>
                              <Route path="discution/:id" element={<Message afficheMenus = {afficheMenus}/>} />
                              <Route path="/" exact  element={<Image/>} />
                     </Routes>
                     <Profile/>
                     
                </div>
            </div>
          )
}

export default Dashbord