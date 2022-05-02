import React from 'react'
import "../../css/bootstrap/bootstrap.min.css"
import "./users.css"

import ListeUsers from '../listeUsers/listeUsers'

function Users (){
    return (
            <div className='users'>

                <div className='users-nav'>
                     <div className='u-nav'>
                        <span>lanto</span>
                        <span className='chat'>CHAT</span>
                     </div>
                 </div>

                 <div className='users-search'>
                     <div className='u-search'>
                        <input type="search" className='form-control inp-search' placeholder=' Search'/>
                     </div>
                 </div>

                 <div className='users-liste'>
                          <ListeUsers/>
                 </div>
            </div>
          )
}

export default Users