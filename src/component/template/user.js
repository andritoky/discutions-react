import React from 'react'
import {useRef , useEffect , useState } from "react"
import { getUserSession } from '../session/userSession';
import { verifyUserToken } from '../requette/loginRequette';

function User (){

   let [user , setUser] = useState({})

   async function getUser(){
      let data = await getUserSession()
      let userDecode = await verifyUserToken(data)
      setUser(userDecode.data)
   }
   
   useEffect(()=>{
      getUser()
   },[])

   return (
            <div className="box-user">
                <span>User :</span>
                <span>{user.email} </span>
            </div>
        )
    
}

export default User

