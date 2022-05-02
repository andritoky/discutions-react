import React, { useEffect, useState } from 'react'
import { getUserSession } from '../../../session/userSession'
import "./profile.css"

function Profile (){

  let [info , setInfo] = useState({})
  useEffect(()=>{
    getUserInfo()
  },[])

  function getUserInfo() {
      let user_info = getUserSession()
      setInfo(user_info)
  }

   return (
            <div className='block-profile'>
                <div className='box-log-out2'>
                    <button  className ="btn btn-dark" >log out</button>
                </div>
                <div className='box-profile'>
                      <div className='image-profile'>
                          <img src={"/uploads/"+info.profile} alt="my-tag"></img>
                      </div>
                      <p className="pr-nom">{info.nom}</p>
                      <p className="pr-contact">{info.contact}</p>
                      <p className="pr-email">{info.email}</p>
                </div>
            </div>
          )
}

export default Profile