import React , {useState} from 'react'
import "./setting.css"
import "./theme.css"
import { FaPalette , FaCheck} from "react-icons/fa";
import theme_items from '../../../jsonData/theme.json'
import { useDispatch } from 'react-redux';
import { updateThemeAction } from '../../../store/app/appActions';

function Setting (){

    let [active , setActive] = useState("Bleu")
    let dispatch = useDispatch()

    function changeTheme(theme){
        let data = {
            mode : theme.theme,
            colorCode : theme.color,
            userClass : theme.userClass,
            msgClass : theme.msgClass
       }
       setActive(theme.theme)
       dispatch(updateThemeAction(data))
    }
    return (
            <div className='block-setting'>
                <div className='box-setting'>
                    <div className='box-setting-title'>
                        Theme setting
                        <span className=''></span>
                    </div> 
                    <span className='text-mode'> <FaPalette/> Mode</span>
                    <div className='liste-theme'>
                        {theme_items.map((theme , index) => {
                            return (
                                <div className ="my-theme" key = {index} onClick = {()=>{changeTheme(theme)}}>
                                    <div className={theme.themeCss} >
                                        {theme.theme == active ?<FaCheck/> :""}
                                    </div>
                                    <span className='tm-tx'>{theme.theme}</span>
                                </div>
                             )
                        })}
                    </div> 
                </div>
            </div>
          )
}

export default Setting