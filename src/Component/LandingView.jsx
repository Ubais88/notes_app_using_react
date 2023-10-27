import React from 'react'
import Style from "../Styles/LandingView.module.css"
import image from "../Assets/homeimg.png"
import {MdLock} from "react-icons/md"

const LandingView = () => {
  return (
    <div className={Style.main}>
      <div className={Style.top}>
        <div className={Style.imageContainer}>
          <img src={image} alt="Image" className={Style.img} />
          <p className={Style.heading}>Pocket notes</p>
          <p className={Style.para}>
            Send and receive messages without keeping your phone online.Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div>
        <div className={Style.security}>
          <MdLock/>
          <p className={Style.securityText}>end-to-end encrypted</p>
        </div>
      </div>
    </div>
  )
}

export default LandingView