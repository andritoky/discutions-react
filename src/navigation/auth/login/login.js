import React from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom'
import { useState , useEffect , useRef} from 'react';
import { postLogin } from '../../../requette/loginRequette';
import { isAuthSession, isAuthCookieSession } from '../../../session/authentification';
import { setUserSession } from '../../../session/userSession';


function Login (){

    let email = useRef(null),
        password = useRef(null)

    let [message , setMessage] = useState()
    let navigate = useNavigate()

   useEffect(()=>{
    isCookie() 
   },[])

   let isCookie = async function(){
      let reponse = await isAuthCookieSession()
      reponse? navigate("/dashbord") : console.log(reponse)  
   }

   let register = function(){
      navigate("/register")
   }
   let login = function(){
      requetLogin()
   }

   async function requetLogin(){

    let login_data = {
        email : email.current.value,
        password : password.current.value,
    }
    let reponse = await postLogin(login_data)
    console.log(reponse)
    setUserSession(reponse.user)
    setMessage(reponse.message)

    if(reponse.user){
       setUserSession(reponse.myUser)
       isAuthSession()
       navigate("/dashbord")
    }
  }

   return (
            <div className="block-login">
              <div className="box-login">
                    <h3>Identifier vous </h3>
                    <label >Email   </label>
                    <input ref={email}  type="email" placeholder = " email" className="form-control" />
                    <label >Password  </label>
                    <input ref={password}  type="password" placeholder = " password" className="form-control"  />
                   
                    <br/>
                    <div> 
                       <button onClick={login} className ="btn btn-primary" >Login</button>
                       <button onClick={register} className ="btn btn-dark btn-register" >Register</button>
                    </div>
                    <br/>
                    {message? <div className="alert alert-danger">{message}</div> :null }    
                    
                    <br/>
                    {/* <div> toky@gmail.com </div>
                    <div> lantoniaina@gmail.com </div>
                    <div> madalifetechnologie@gmail.com/ toky4 </div>
                    <div> randriamampiononaandritoky@gmail.com/ toky4 </div> */}
                    
                
               </div>
            </div>
        )
    
}

export default Login

