import React, { useState } from 'react'
import SideBar from '../Component/SideBar'
import LandingView from '../Component/LandingView' 
import NotesArea from '../Component/NotesArea.jsx' 
import Style from "../Styles/NotesPage.module.css"

const NotesPage = () => {
  
  const [selected , setSelected] = useState(true)
  const [selectedGroupColor , setSelectedGroupColor] = useState("red")
  const [selectedGroupName , setSelectedGroupName] = useState("Ubais")
  // const [mobileview  ,setMobileview] = useState(true)


  return (
    <>
      <div className={Style.main}>     
          <SideBar 
            setSelected={setSelected} 
            setSelectedGroupColor={setSelectedGroupColor} 
            setSelectedGroupName={setSelectedGroupName}
          />
          {
            selected ? 
            <LandingView /> : 
            <NotesArea 
              selectedGroupColor={selectedGroupColor} 
              selectedGroupName={selectedGroupName}
            />
          }        

      </div>

      <div className={Style.mobile}>
      {
        selected ? 
        <SideBar 
            setSelected={setSelected} 
            setSelectedGroupColor={setSelectedGroupColor} 
            setSelectedGroupName={setSelectedGroupName}
            // setMobileview={setMobileview}
          /> :
        <NotesArea 
          selectedGroupColor={selectedGroupColor} 
          selectedGroupName={selectedGroupName}
          setSelected={setSelected} 
          // setMobileview={setMobileview}
          // mobileview={mobileview}
        />
      }
      </div>
    </>
  )
}

export default NotesPage