import React, { useEffect, useState } from 'react'
import './image.css'
import {FaUserFriends , FaCommentAlt} from "react-icons/fa";
import { getUserSession } from '../../../session/userSession';


function Image (){

  let [user , setUser] =  useState({})

  useEffect(()=>{
    setUser(getUserSession())
  },[])
    
   return (
            <div className='block-image'>
              <div className='box-image'>
                <div className='ico-image'> <FaCommentAlt /></div> 
                <div className='text-image'>
                  <span className=''>Welcome to your chat  </span><br/>
                  <span className='image-user-nom'>{user.nom} </span>
                </div>
              </div>
            </div>
          )
}

export default Image