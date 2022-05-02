

let initState = {
  clients : [],
  loading :true
}


 const GET_LISTE = 'get_liste'
 const AJOUT_FETCH_CLIENT_LISTE = 'ajout_fetch_client_liste'
 const UPDATE_CLIENT_LISTE = 'update_client_liste'
 const DELETE_CLIENT_LISTE = 'delete_client_liste'
 const ADD_CLIENT_LISTE = 'add_client_liste'

export function listeReducer(state = initState , action){
    switch(action.type){
      
        case AJOUT_FETCH_CLIENT_LISTE :
          return {...state , clients : action.payload , loading : false }

        case ADD_CLIENT_LISTE :
          return {...state , clients : [...state.clients , action.payload] , loading : false }
        
        case UPDATE_CLIENT_LISTE :
          return state.clients.map(client => {
            if (client._id == action.payload.id){
               return {...client , ...action.payload.data}
            }
            else return client
          })

        case DELETE_CLIENT_LISTE :
          return {...state , clients : state.clients.filter(client => client._id !== action.payload) , loading : false }
        
        default:
          return state
    }
    console.log('state', state);
 }