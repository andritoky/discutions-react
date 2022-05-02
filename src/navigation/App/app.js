import React from 'react'
import "./app.css"
import {BrowserRouter,Routes,Route } from "react-router-dom";
import  Dashbord  from "../home/dashbord/dashbord.js";
import  Login  from "../auth/login/login.js";
import Main from './main';
import Register from '../auth/register/register';
import {Provider} from 'react-redux'
import store from "../../store/app/index"

function App (){
   return (
            <div className="contener">
                <Provider store = {store}>
                  <BrowserRouter>
                   <Routes>
                      <Route path="/" exact  element ={ <Main/>}/> 
                      <Route path="/login" exact  element ={ <Login/>}/> 
                      <Route path="/register" exact  element ={ <Register/>}/> 
                      <Route path="/dashbord/*" element ={ <Dashbord /> }/>
                    </Routes>
                  </BrowserRouter>
                </Provider>
            </div>
        ) 
}

export default App

