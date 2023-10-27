import React from 'react'
import SideBar from '../Component/SideBar'
// import LandingView from '../Component/LandingView' 
import NotesArea from '../Component/NotesArea.jsx' 
import Style from "../Styles/NotesPage.module.css"
import Modal from '../Component/Modal'


const NotesPage = () => {
  return (
    <div className={Style.main}>
        {/* <SideBar/> */}
        {/* <LandingView/> */}
        {/* <NotesArea/>  */}
          
        <Modal/>
        
    </div>
  )
}

export default NotesPage