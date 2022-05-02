import React from 'react'
import {useRef} from "react"
import {useHistory} from 'react-router-dom'

function Search (){

   let search = useRef(null)
   let history = useHistory()

   function verifySearchData (){
       let data = search.current.value
       if(data === ""){
          console.log("Taper text !");
          search.current.placeholder = " Taper nom client !"
       }
       else{
          searchClient()
       }
   }

   function searchClient(){
       let data = search.current.value
       let url = "/search/" + data
       history.push(url)
       console.log(data);
   }

   return (
            <div className="box-search">
               <label >Recherche  </label>
               <input ref={search}  type="text" placeholder = " Entrer nom" className="form-control"  />
               <div className="box-btn-search"> <button onClick={verifySearchData} className ="btn btn-primary" >Search</button></div>
               <br/> 
            </div>
            
        )
    
}

export default Search

