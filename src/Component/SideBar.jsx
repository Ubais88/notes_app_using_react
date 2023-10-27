import React, { useState } from 'react'
import Style from "../Styles/SideBar.module.css"
import {FaPlus} from "react-icons/fa"
import Modal from './Modal'

const SideBar = () => {
  const [modalOpen , setModalOpen] = useState(false);


  return (
    <div className={Style.main}>
      <p className={Style.heading}>Pocket Notes</p>

      <div className={Style.container}>

        <button className={Style.creategrpbtn} onClick={()=>setModalOpen(!modalOpen)}>
          <FaPlus size={14} />
          <p className={Style.btnText}>Create Notes Group</p>
        </button>

        <div className={Style.allGroups}>
          <div className={Style.select}>
              <div className={Style.selectgrpLogo}>AN</div>
              <p className={Style.selectgrpName}>Apne Notes</p>
          </div>
          <div className={Style.group}>
              <div className={Style.grpLogo}>UN</div>
              <p className={Style.grpName}>Ubais Notes</p>
          </div>
          <div className={Style.group}>
              <div className={Style.grpLogo}>AJ</div>
              <p className={Style.grpName}>Ajhar Notes</p>
          </div>

          <div className={Style.group}>
              <div className={Style.selectgrpLogo}>AN</div>
              <p className={Style.selectgrpName}>Apne Notes</p>
          </div>
          <div className={Style.group}>
              <div className={Style.grpLogo}>UN</div>
              <p className={Style.grpName}>Ubais Notes</p>
          </div>
          <div className={Style.group}>
              <div className={Style.grpLogo}>AJ</div>
              <p className={Style.grpName}>Ajhar Notes</p>
          </div>


          <div className={Style.group}>
              <div className={Style.selectgrpLogo}>AN</div>
              <p className={Style.selectgrpName}>Apne Notes</p>
          </div>
          <div className={Style.group}>
              <div className={Style.grpLogo}>UN</div>
              <p className={Style.grpName}>Ubais Notes</p>
          </div>
          <div className={Style.group}>
              <div className={Style.grpLogo}>AJ</div>
              <p className={Style.grpName}>Ajhar Notes</p>
          </div>
          
        </div>
      </div>
    {
      modalOpen && <Modal setModalOpen={setModalOpen}/>
    }
      
    </div>
  )
}

export default SideBar