import React, { useState } from 'react'
import SideBar from '../Component/SideBar'
import LandingView from '../Component/LandingView' 
import NotesArea from '../Component/NotesArea.jsx' 
import Style from "../Styles/NotesPage.module.css"

const NotesPage = () => {

  const [selected , setSelected] = useState(true)
  const [selectedGroupColor , setSelectedGroupColor] = useState("")
  const [selectedGroupName , setSelectedGroupName] = useState("")

  return (
    <div className={Style.main}>
        <SideBar 
          setSelected={setSelected} 
          setSelectedGroupColor={setSelectedGroupColor} 
          setSelectedGroupName={setSelectedGroupName}
        />
        {
          selected ? 
          <LandingView /> : 
          {/* <NotesArea 
            selectedGroupColor={selectedGroupColor} 
            selectedGroupName={selectedGroupName}
          /> */}
        }        
    </div>
  )
}

export default NotesPage