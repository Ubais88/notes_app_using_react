import React, { useState } from 'react'
import Style from "../Styles/Modal.module.css"

const Modal = ({setModalOpen, groupData, setGroupData}) => {

    // console.log("from modal", groupData)
    const [name  ,setName] = useState('');
    const [colorname  ,setcolorname] = useState('');

    const handleoutsideClick = (e) => {
        {
            e.target.id === "close" && setModalOpen(false);
        }                  
    }

    const handleOnChange = (e) => {
        setName(e.target.value);
    }

    const colorClicked = (e) => {
        setcolorname(e.target.style.backgroundColor)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newData = { groupName: name ,colorName:colorname }
        setGroupData([...groupData , newData])
        localStorage.setItem(
            "groupData",
            JSON.stringify([...groupData, newData])
        );
        // console.log("clicked",groupData); 
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
                    <input 
                        type="text"
                        name='groupName' 
                        placeholder='Enter your group name....' 
                        className={Style.nameInput}
                        value={groupData.name}
                        onChange={handleOnChange}
                    />
                </div>
                <div className={Style.colorContainer}>
                    <p className={Style.colortext}>Choose colour</p>
                    <div className={Style.colors}>
                        <div style={{backgroundColor:"#B38BFA"}} onClick={colorClicked}></div>
                        <div style={{backgroundColor:"#FF79F2"}} onClick={colorClicked}></div>
                        <div style={{backgroundColor:"#43E6FC"}} onClick={colorClicked}></div>
                        <div style={{backgroundColor:"#F19576"}} onClick={colorClicked}></div>
                        <div style={{backgroundColor:"#0047FF"}} onClick={colorClicked}></div>
                        <div style={{backgroundColor:"#6691FF"}} onClick={colorClicked}></div>
                    </div>
                </div>
            </div>
            <div className={Style.btncontainer}>
                <button className={Style.btn} onClick={submitHandler}>Create</button>
            </div>
        </div>
    </div>
  )
}

export default Modal