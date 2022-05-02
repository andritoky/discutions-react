import React from 'react'
//import "../css/login.css"
import "../css/bootstrap/bootstrap.min.css"
import {  useHistory , Link} from 'react-router-dom'
import { logOut } from '../requette/loginRequette';
import { isNotAuthSession } from '../session/authentification';


function Logout (){

    let history = useHistory()

    async function requetlogout(){
        let reponse = await logOut()
        if(reponse === true){
            isNotAuthSession()
            history.push("/")
        }
     }

    return (
             <div className="box-logout">
                <button className="btn btn-dark" onClick = {requetlogout} >logOut</button>
              </div>
         )
     
 }
 
 export default Logout

