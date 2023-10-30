import React, { useEffect, useState } from 'react'
import Style from "../Styles/SideBar.module.css"
import {FaPlus} from "react-icons/fa"
import Modal from './Modal'

const SideBar = ({setSelected , setSelectedGroupColor , setSelectedGroupName}) => {
  const [modalOpen , setModalOpen] = useState(false);
  const [groupData , setGroupData] = useState(localStorage.getItem("groupData") || []);
  const [showData, setShowData] = useState([]);
  const [selectedItem , setSelectedItem] = useState('')
  
  

  useEffect(() => {
    const prevSaved = localStorage.getItem("groupData");
    {
      prevSaved ? setGroupData(JSON.parse(prevSaved)) : setGroupData([])
    }
  }, []);

  useEffect(() => {
      const Data = () => {
        if(groupData.length > 0){
        const groupdetails = JSON.parse(localStorage.getItem("groupData"))
        const result = Object.keys(groupdetails).map((key) => [groupdetails[key]]);
        setShowData(result)
      }}
      Data();
  },[groupData])


  return (
    <div className={Style.main}>
      <p className={Style.heading}>Pocket Notes</p>

      <div className={Style.container}>

        <button className={Style.creategrpbtn} onClick={()=>setModalOpen(!modalOpen)}>
          <FaPlus size={14} />
          <p className={Style.btnText}>Create Notes Group</p>
        </button>

        <div className={Style.allGroups}>
          { 
            showData.length > 0 && (
              showData.map((names , index) => (
                <div 
                  className={Style.select}
                  key={index} 
                  onClick={() => 
                    {
                      setSelectedItem(index); 
                      setSelected(false);
                      setSelectedGroupColor(names[0].colorName); 
                      setSelectedGroupName(names[0].groupName);
                    }
                  } 
                  style={{backgroundColor: selectedItem === index ? '#F7ECDC': 'transparent'}} 
                >
                  <div 
                    className={Style.selectgrpLogo} 
                    style={{ backgroundColor: names[0].colorName}} 
                  >
                    {names[0].groupName.slice(0,2).toUpperCase()}
                  </div>
                  <p className={Style.selectgrpName}>{names[0].groupName}</p>
                </div>
              ))
          )}
        </div>
      </div>
    {
      modalOpen && <Modal setModalOpen={setModalOpen} groupData={groupData} setGroupData={setGroupData} />
    }
      
    </div>
  )
}

export default SideBar