import React from 'react'
import "../css/bootstrap/bootstrap.min.css"
import "../css/menus.css"
import  Nav  from "./nav.js";
import  Search  from "./search.js";
import  Logout  from "./logout.js";
import  User  from "./user.js";
import {useRef , useState} from "react"
import { addOneClient } from '../requette/clientRequette';


function Menus (){

    let nom = useRef(null),
        adresse = useRef(null),
        description = useRef(null),
        image = useRef(null),
        alert_data = useRef(null),
        alert_send = useRef(null)

    let [fileImage , setFileImage] = useState(''),
        [selectedImage, setSelectedImage] = useState(''),

        [imageSource ,setImageSource] = useState('')
    
    
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

    
    function submitImage(e){
        e.preventDefault()
        if(!imageSource) return;
        uploadeImage(imageSource)
    }

    function uploadeImage(ImageBase64){
        //console.log(ImageBase64);
        setFileImage(ImageBase64)
    }

    function ajoutClient(e){
        submitImage(e)
        let client_nom = nom.current.value,
            client_adresse = adresse.current.value,
            client_description = description.current.value

        let tab = [client_nom , client_adresse , client_description]
        let tabElement = [nom , adresse ,description]

        flashInvisible()
        
        tab.map(( dt , index ) => {
            tabElement[index].current.style.borderColor = "#cccccc";
            
            if (dt ===""){ 
                console.log('Remplir votre ' + tabElement[index].current.placeholder);
                tabElement[index].current.style.borderColor = "red";
                alert_data.current.className = "affiche red";  
            }
        })
        
        if(client_nom !== "" & client_adresse !== "" & client_description !== ""){
            console.log('data send !'); 
            addClient()
            alert_send.current.className = "affiche green";
        }
        
    }

    function flashInvisible(){
        alert_data.current.className = "invisible";
        alert_send.current.className = "invisible";
    }

    async function addClient(){
        
        let client_data = {
            nom : nom.current.value,
            adresse : adresse.current.value,
            description : description.current.value,
            image : imageSource
        }
        console.log(client_data)
        let reponse = await addOneClient(client_data)
        console.log(reponse)
     
    }

    let form = useRef(null)
    let changeOnclick = (e) => {
        e.preventDefault()
        let formData = new FormData()

             formData.append("nom" , nom.current.value )
             formData.append("adresse" ,adresse.current.value )
             formData.append("description" , description.current.value )
             formData.append("image" , imageSource )

        //formData.forEach(dt =>console.log( 'dt' , dt))
        addOneClient(formData)

    }

    


    return (
            <div className="block-ajout">
            
                <Nav/> 
                <User/>
                <Search/>
                <div className = ""><strong>Creer nouveau client</strong></div>
                <form  ref={form} onSubmit = {changeOnclick} encType = "multipart/form-data" >
                    <div className="box-ajout">
                        <label >Entrer Nom  </label>
                        <input ref={nom} onClick={flashInvisible} type="text" placeholder = " nom" className="form-control"  />
                        <label >Entrer Adresse  </label>
                        <input ref={adresse} onClick={flashInvisible} type="text" placeholder = " adresse" className="form-control"  />
                        <label >Entrer Description  </label>
                        <input ref={description} onClick={flashInvisible} type="text" placeholder = " description" className="form-control"  />
                        <label >Image  </label>
                        <input ref={image}  type="file" onChange={fileChange} placeholder = " Select Image" accept="image/*"  name="myImage"   className="form-control"  />
                    </div>
                    <br/>
                    {/* <div> <button type="submit"  className ="btn btn-primary" >Creer nouveau client</button></div> */}
                    <div> <button  className ="btn btn-primary" onClick ={ajoutClient}>Creer nouveau client</button></div>
                </form>    
                <br/>
                <div ref={alert_data} className = " alert alert-primaty invisible">Remplisser vos information !</div>
                <div ref={alert_send} className = " alert alert-primaty invisible">Envoie succes !</div>
                <Logout/>
                {imageSource && (
                     <img src= {imageSource} alt="chosen" style={{width:'100px'}}/>
                )}
            </div>
          )
}

export default Menus