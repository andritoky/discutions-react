const FILTRE_LISTE = 'filtre_liste'

export function filterReducer( state = null , action){
    switch(action.type){
        case FILTRE_LISTE:
          return action.payload
        default:
          return state
    }
}