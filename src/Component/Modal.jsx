import React, { useState } from 'react'
import Style from "../Styles/Modal.module.css"

const Modal = ({setModalOpen, groupData, setGroupData}) => {

    const colorList = ["rgb(179, 139, 250)" , "rgb(255, 121, 242)" , "rgb(67, 230, 252)",
                       "rgb(241, 149, 118)" , "rgb(0, 71, 255)" , "rgb(102, 145, 255)"
                      ];
    const [name  ,setName] = useState('');
    const [colorname  ,setcolorname] = useState('');
    const [error , setError] = useState({})

    const handleoutsideClick = (e) => {
        {
            e.target.id === "close" && setModalOpen(false);
        }                  
    }

    const handleOnChange = (e) => {
        setName(e.target.value);
        setError({})
    }

    const colorClicked = (e) => {
        setcolorname(e.target.style.backgroundColor)
        setError({})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("name length: " ,name.length)
        const newError = {};
        if( name.length >=2 && colorname ){
            const newData = { groupName: name ,colorName:colorname }
            setGroupData([newData , ...groupData])
            localStorage.setItem(
                "groupData",
                JSON.stringify([newData , ...groupData])
            );
            // console.log("clicked",groupData); 
            setModalOpen(false)
        }
        else{
            name.length >=2 ? ("") : ( newError.name = 'Minimum Name length must be Two Characters')
            colorname ? ("") : ( newError.colorname = "Select AnyOne Colour")
        }
        { Object.keys(newError).length && setError(newError) }
    }
    console.log(error)

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
                    <div className={Style.inputErrContainer}>
                        <input 
                            type="text"
                            name='groupName' 
                            placeholder='Enter your group name....' 
                            className={Style.nameInput}
                            value={groupData.name}
                            onChange={handleOnChange}
                        />
                        <span className={Style.error} style={{marginLeft:"1.3rem"}}>{error.name}</span>
                    </div>
                </div>
                <div className={Style.colorContainer}>
                    <p className={Style.colortext}>Choose colour</p>
                    <div className={Style.colorErrContainer}>
                        <div className={Style.colors}>
                        {
                            colorList.map((color , index) => (
                                <div 
                                    key={index}
                                    style={{
                                        backgroundColor:color, 
                                        border: (colorname === color) ? '1px solid black' : 'none'
                                    }} 
                                    onClick={colorClicked}
                                ></div>
                            ))
                        }
                        </div>
                        <span className={Style.error}>{error.colorname}</span>
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