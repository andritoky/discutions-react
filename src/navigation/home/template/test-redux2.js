import {connect, useSelector, useDispatch } from 'react-redux'
import { listeReducer } from '../store/listeReducer';
import {useEffect } from "react"
import "../css/bootstrap/bootstrap.min.css"
import {listeSelector, filterListeSelector} from '../store/listeSelectors.js'
import {updateListeAction , deleteListeAction} from '../store/listeActions.js'


export function ListeStore2(){
    let liste = useSelector(filterListeSelector)
    let dispatch = useDispatch()

    let onToggle = useCallback((user)  => {
        dispatch(updateListeAction(user))
    },[])
    let onDelete = useCallback((user)  => {
        dispatch(deleteListeAction(user))
    },[])

    return <ListeRedux liste={liste} onToggle={onToggle} onDelete= {onDelete}/>
}

export  function ListeRedux({liste , onToggle ,onDelete}) {

    return <div className = "liste-redux2"> 
       <ul> 
        {
         liste.map((user , index) => {
            return (
               <li key={user.id} className = 'alert alert-danger'>
                   <input type ="checkbox" defaultChecked = {user.admin} onChange = {() => onToggle(user) } /> ' '  
                   {user.userName}
                   <button onClick={() => onDelete(user)} className = "btn btn-dark" style={{marginLeft:"100px"}}  >sup</button>
               </li>
            )
        })
       }
      </ul>
     </div>
}



 
