import React, { useEffect, useState } from 'react'
import Style from "../Styles/SideBar.module.css"
import {FaPlus} from "react-icons/fa"
import Modal from './Modal'

const SideBar = ({setSelected , setSelectedGroupColor , setSelectedGroupName , setUniqueKey}) => {
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
        setSelectedItem(selectedItem+1)
      }}
      Data();
  },[groupData])


  return (
    <div className={Style.main}>
      <p className={Style.heading}>Pocket Notes</p>

      <div className={Style.container}>
        <div className={Style.btn_Cont}>
        <button className={Style.creategrpbtn} onClick={()=>setModalOpen(!modalOpen)}>
          <FaPlus size={14} />
          <p className={Style.btnText}>Create Notes Group</p>
        </button>
        </div>

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
                      setUniqueKey(names[0].uniqueKey)
                    }
                  } 
                  style={{backgroundColor: selectedItem === index ? '#F7ECDC': 'transparent'}} 
                >
                  <div 
                    className={Style.grpLogo} 
                    style={{ backgroundColor: names[0].colorName}} 
                  >
                    <p>{names[0].groupName.slice(0,2).toUpperCase()}</p>
                  </div>
                  <p className={Style.grpName}>
                    {
                      names[0].groupName.length >= 18 ? (names[0].groupName.slice(0,19)+'...') : (names[0].groupName)
                    }
                  </p>
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