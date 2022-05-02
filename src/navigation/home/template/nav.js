import React from 'react'
import "../css/nav.css"
import {Link } from 'react-router-dom'


function Nav (){

    return (
             <div className="nav">
                
                <Link to="/dashbord">
                   <li>Aceuil</li>
                </Link>
                <Link to="/materiel">
                   <li>Materiel</li>
                </Link>
                <Link to="/rapport">
                   <li>Rapport</li>
                </Link>
                
             </div>
         )
     
 }
 
 export default Nav

