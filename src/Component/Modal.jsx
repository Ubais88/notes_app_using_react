import React from 'react'
import Style from "../Styles/Modal.module.css"

const Modal = ({setModalOpen}) => {

    const handleoutsideClick = (e) => {
        if(e.target.id === "close") 
            setModalOpen(false)       
    }

  return (
    <div 
        className={Style.modal} 
        onClick={handleoutsideClick}
        id='close'
    >
       <div className={Style.content}>
            <p className={Style.heading}>Create New Notes group</p>
            <div className={Style.rowsContainer}>
                <div className={Style.inputContainer}>
                    <p className={Style.name}>Group Name</p>
                    <input type="text" placeholder='Enter your group name....' className={Style.nameInput} />
                </div>
                <div className={Style.colorContainer}>
                    <p className={Style.colortext}>Choose colour</p>
                    <div className={Style.colors}>
                        <div style={{backgroundColor:"#B38BFA"}}></div>
                        <div style={{backgroundColor:"#FF79F2"}}></div>
                        <div style={{backgroundColor:"#43E6FC"}}></div>
                        <div style={{backgroundColor:"#F19576"}}></div>
                        <div style={{backgroundColor:"#0047FF"}}></div>
                        <div style={{backgroundColor:"#6691FF"}}></div>
                    </div>
                </div>
            </div>
            <div className={Style.btncontainer}>
                <button className={Style.btn}>Create</button>
            </div>
         </div>
    </div>
  )
}

export default Modal