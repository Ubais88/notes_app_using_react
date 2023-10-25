import React from 'react'
import SideBar from '../Component/SideBar'
import NotesArea from '../Component/NotesArea' 
import Style from "../Styles/NotesPage.module.css"


const NotesPage = () => {
  return (
    <div className={Style.main}>
        <SideBar/>
        <NotesArea/>
    </div>
  )
}

export default NotesPage