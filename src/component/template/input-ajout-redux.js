import { useDispatch } from "react-redux";
import { useRef } from "react";
import { ajoutListeAction } from "../store/listeActions";



export function InputAjout () {

    let dispatch = useDispatch()
    let input = useRef(null)

    let handleSubmit = (e) => {
        let input_value = input.current.value
        e.preventDefault()
        dispatch(ajoutListeAction(input_value))
        input.current.value =''
        input.current.focus()
    }
    return (
        <div className = "input-ajout">
          <form onSubmit = {handleSubmit}>
             <label>Ajouter :</label>
             <input type = "text" ref = {input} className = "form-control" />
             <button type ="submit" className = "btn btn-dark" style = {{marginTop : 10}}> Submit </button>
          </form><br/>
        </div>
    )
}