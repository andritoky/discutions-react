import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuthSession } from '../../session/authentification'

function Main (){
    let navigate = useNavigate()

    useEffect(()=>{
        verifyAuthSession()
    },[])

    function verifyAuthSession() {
        let auth = getAuthSession()
        if(auth == false) navigate("/login")
        if(auth == true)  navigate("/dashbord")
        
        console.log("authentification :" , auth);
    }
    return null
}
 
 export default Main