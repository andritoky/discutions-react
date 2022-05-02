import React, { useEffect , useState } from 'react'
import { getUserSession } from '../../session/userSession';
import "./nav.css"

function Nav (){
   let [user , setUser] = useState({})
   
   useEffect(() => {
      userSessionGet()
   },[])

   async function userSessionGet() {
      let data =  getUserSession()
      setUser(data)
   }
   return (
               <div className="nav">
                  <div className='nav-box'>
                      <span>MY-MESSANGER-APP</span>
                      <span className="user-name" >User : {user.nom} </span>
                  </div>
                   
               </div>
          )
}

export default Nav