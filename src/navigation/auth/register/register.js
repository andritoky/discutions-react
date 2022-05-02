import React from 'react'
import "./register.css"
import { useNavigate } from 'react-router-dom'
import { useState , useRef} from 'react';
import { addUsers } from '../../../requette/usersRequette';


function Register (){
    
    let email = useRef(null),
        password = useRef(null),
        nom = useRef(null),
        contact = useRef(null)

   let [imageSource ,setImageSource] = useState('')
   let [reponse , setReponse] = useState()
   let navigate = useNavigate()
    
   let newUser = async () => {
      let data = {
         nom: nom.current.value,
         contact: contact.current.value,
         email: email.current.value,
         password: password.current.value,
         profile : imageSource
      }
      let reponse =  await addUsers(data)
      setReponse(reponse)
   }
   let login = function(){
      navigate("/login")
   }

   function fileChange(e){
      let file = e.target.files[0]
      previewImage(file)
   }

   function previewImage(file){
     let reader = new FileReader()
         reader.readAsDataURL(file)
         reader.onloadend = () =>{
             setImageSource(reader.result)
         }
   }
  
   return (
            <div className="block-register">
              <div className="box-register">
                    <h3> Renplisser le formulaire </h3>
                    <label >Nom   </label>
                    <input ref={nom}  type="text" placeholder = " name" className="form-control" />
                    <label >Contact   </label>
                    <input ref={contact}  type="number" placeholder = " contact" className="form-control" />
                    <label >Email   </label>
                    <input ref={email}  type="email" placeholder = " email" className="form-control" />
                    <label >Password  </label>
                    <input ref={password}  type="password" placeholder = " password" className="form-control"  />
                    <label >Profile photo  </label>
                    <input  type="file" onChange={fileChange} placeholder = " photo" className="form-control" accept="image/*"  name="registerImage"  />
                   
                    <br/>
                    <div> 
                       <button onClick={newUser} className ="btn btn-primary" >New user</button>
                       <button onClick={login} className ="btn btn-dark btn-register" >back to login</button>
                    </div>
                  
                    <br/>
                    {reponse? <div className={reponse.class}>{reponse.message}</div> :null }  
                    
                   
                
               </div>
            </div>
        )
    
}

export default Register

