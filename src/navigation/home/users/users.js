import React, { useState , useEffect, useRef} from 'react'
import { FaEllipsisV ,FaPalette , FaUser, FaCommentAlt , FaComments , FaSearch ,FaCog} from "react-icons/fa";
import "../../../css/bootstrap/bootstrap.min.css"
import "./users.css"

import ListeUsers from '../listeUsers/listeUsers'
import { ErrorBondary } from '../../errorBondary/errorBondary';
import { getUserSession } from '../../../session/userSession';
import { searchUsers } from '../../../requette/usersRequette';
import Setting from '../setting/setting';
import { useSelector } from 'react-redux';
import { appSelector } from '../../../store/app/appSelectors';

function Users ({afficheMenus}){

    let [afficheUser , setAfficheUser] = useState(false)
    let [afficheChannel , setAfficheChannel] = useState(true)
    let [afficheMode , setAfficheMode] = useState(false)
    let [info , setInfo] = useState({})
    let [mySearch , setmySearch] = useState({})
    let search =  useRef(null)

    let appStore = useSelector(appSelector)
    let theme = appStore.theme.userClass

    useEffect(()=>{
        getUserInfo()
    },[])
    function getUserInfo() {
        let user_info = getUserSession()
        setInfo(user_info)
    }

    function afficheUserClick() {
        setAfficheUser(!afficheUser) 
        setAfficheChannel(!afficheChannel) 
    }

    function afficheModeClick() {
        setAfficheMode(!afficheMode) 
    }

    async function getSearchUsers(){
        let search_data = search.current.value
        let data = await searchUsers(search_data)
        setmySearch(data)
    }
    return (
            <div className={theme}>

                <div className='users-nav'>
                     <div className='u-nav'>
                        <span>lantoChat</span>
                        <span className='ico-setting' onClick={() => {afficheModeClick()}}> <FaCog/></span>
                     </div>
                 </div>

                 <div className='users-nav2'>
                    <div className='nav-box2'>
                            <div className='nav-image'>
                                <img src={"/uploads/"+info.profile} alt="my-tag"></img>
                            </div>
                            <div className="info-user-nom">
                                {info.nom}
                             </div>
                             <span className='ico-setting2' onClick={() => {afficheModeClick()}}> <FaCog/></span>
                            
                    </div>
                 </div>

                 <div className='users-search'>
                     <div className='u-search'>
                        <input ref = {search} type="search" className='form-control inp-search' placeholder='Search Users'/>
                        <button className='fa-ico-search' onClick={() => {getSearchUsers()}}><FaSearch/></button>
                     </div>
                 </div>

                 <div className='users-menus'>
                        <div className='users-ms'>
                            <div className='users-title' >
                                {afficheUser? <span><FaUser className='fa-user'/> Liste Users</span> : ""}
                                {afficheChannel? <span><FaCommentAlt/> Discutions </span> : ""}
                            </div>
                            <button className='btn btn-dark' onClick={()=>{afficheUserClick()}} >
                                {afficheUser? <span><FaCommentAlt/> Discutions</span> : ""}
                                {afficheChannel? <span><FaUser className='fa-user-btn'/> Users </span> : ""}
                            </button>
                        </div>
                 </div>

                 <div className='users-liste'>
                      <ErrorBondary>
                          <ListeUsers afficheMenus = {afficheMenus} afficheUser = {afficheUser} afficheChannel = {afficheChannel} />
                       </ErrorBondary>
                 </div>

                 <div className="setting">
                     {afficheMode?<Setting/> :""}
                 </div>

            </div>
          )
}

export default Users