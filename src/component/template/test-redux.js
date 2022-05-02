import {connect} from 'react-redux'
import { listeReducer } from '../store/listeReducer';
import {useEffect} from "react"
import "../css/bootstrap/bootstrap.min.css"
import "../css/redux.css"
import {listeSelector , filterListeSelector} from '../store/listeSelectors.js'
import {updateListeAction} from '../store/listeActions.js'
import { filtreListeAction } from '../store/filterActions';
import { filterSelector } from '../store/filterSelector';
import { isFunction } from '@babel/types';
import { InputAjout } from './input-ajout-redux';

export function BoutonDeFiltre({value , changeValue}){
    
    return (
        <div className = "box-btn-filtre">
            <button disabled = {value == null} className ="btn btn-primary" onClick = {() => changeValue(null)} >Aucun filtre</button>
            <button disabled = {value == true} className ="btn btn-primary" onClick = {() => changeValue(true)} >Admin</button>
            <button disabled = {value ==false} className ="btn btn-primary" onClick = {() => changeValue(false)} >Pas admin</button>
            
        </div>
    )
}

export function ListeRedux ({liste , filter , changeValue , onToggle}) {
    console.log(liste);
    return (
        <div className = "liste-redux">
        <BoutonDeFiltre value = {filter} changeValue = {changeValue} /> 
        <InputAjout/> 
        <ul>
            {
            liste.map((user , index) => {
                return (
                <li key={user.id} className = 'alert alert-primary'>
                    <input type ="checkbox" defaultChecked = {user.admin} onChange = {() => onToggle(user) } /> ' '  
                    {user.userName}
                </li>
                )
            })
          }
        </ul>
        
        </div>
        
    )
}

export let ListeStore = connect(
    (state) => ({
        liste: filterListeSelector(state),
        filter: filterSelector(state)
    }),
    (dispatch) => ({
        changeValue: (value) => dispatch(filtreListeAction(value)),
        onToggle: user => dispatch(updateListeAction(user)),
        
    })
    
)(ListeRedux)

 

