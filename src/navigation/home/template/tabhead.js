import React from 'react'
import "../css/bootstrap/bootstrap.min.css"
import "../css/tab-head.css"


function TabHead (){
    
    return (
         <thead >
            <tr >
                <th>nom</th>
                <th>adresse</th>
                <th>description</th>
                <th className ="right"><button className ="btn btn-action">Action</button></th>
                
            </tr>
            
         </thead > 
           
        )
}

export default TabHead 