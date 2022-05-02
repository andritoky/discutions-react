
let initState = {
  theme : {
    mode : "Bleu",
    colorCode : "#00b2df",
    userClass : "users-theme-bleu",
    msgClass : "msg-theme-bleu"
  },
  loading :true
}

const GET_THEME = 'get_theme'
const UPDATE_THEME = 'update_theme'

export function appReducer(state = initState , action){

    switch(action.type){

      case UPDATE_THEME :
        return {...state , theme : action.payload , loading : true }
 
      default:
        return state
    }
   
 }