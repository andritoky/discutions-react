let createStore = require('redux').createStore
let combineReducers = require('redux').combineReducers
let appReducer = require('./appReducer').appReducer
 
const DEV_TOOLS = 'ici'

let store = createStore(combineReducers({
     myStore : appReducer
}))
 
 export default store