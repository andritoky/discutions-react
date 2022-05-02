import { filterReducer } from './filterReducer';

let createStore = require('redux').createStore
let combineReducers = require('redux').combineReducers

let listeReducer = require('./listeReducer').listeReducer
 

const DEV_TOOLS = 'ici'

let store = createStore(combineReducers({
     liste : listeReducer,
     filter : filterReducer
 }))
 
 export default store