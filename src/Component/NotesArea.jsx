import React, { useEffect, useState } from 'react'
import Style from "../Styles/NotesArea.module.css"
import {IoSendSharp} from "react-icons/io5"
import {BiArrowBack} from 'react-icons/bi'

const NotesArea = ({selectedGroupColor , selectedGroupName , setSelected, uniqueKey }) => {
    // for typing 
    const [note , setNote] = useState("");
    // for display messages
    const [newNote , setNewNote] = useState([]);
    const time = new Date();
    // console.log(selectedGroupColor)
    const handleOnChange = (e) => {
        setNote(e.target.value);
    }

    const currentTime = () => {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let ampm = hours >= 12 ? 'Pm' : 'Am';
        { 
            hours > 12 && (hours -=  12) 
            hours === 0 && ( hours = 12)
            hours < 10 && (hours = "0"+hours) 
            minutes < 10 && (minutes = "0"+minutes) 
        }      
        return `${hours}:${minutes} ${ampm}`
    }

    const currentDate = () => {
        const day = time.getDate();
        const month = time.getMonth();
        const year = time.getFullYear();
        const monthNames = [
            "Jan", "Feb", "Mar", "Apr",
            "May", "June", "July", "Aug",
            "Sep", "Oct", "Nov", "Dec"
          ];
        return `${day} ${monthNames[month]} ${year}`
    }
    const handleOnSave = () => {
        const newMsg = {
            time: currentTime(),
            date: currentDate(),
            message: note,
        }
        if(newMsg.message.trim().length !== 0){             
            setNewNote([newMsg,...newNote])
            localStorage.setItem(uniqueKey , JSON.stringify([newMsg,...newNote]))
            setNote("")
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault(); // Prevent the Enter key from adding a newline 
          handleOnSave();
        }
      };

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem(uniqueKey)) || [];
        setNewNote(savedNotes);
    }, [selectedGroupName , uniqueKey])

  return (
    <div className={Style.main}>
        <nav className={Style.nav}>
            <div className={Style.back}>
                <BiArrowBack 
                    size={30}
                    style={{marginLeft:".5rem", marginRight:"0"}}
                    className={Style.backbtn} 
                    onClick={() => setSelected(true)} 
                />
            </div>
            <div 
                className={Style.logo}
                style={{ backgroundColor: selectedGroupColor}}
            >
                <p className={Style.logoletter}>{selectedGroupName.slice(0,2).toUpperCase()}</p>
            </div>
            <div className={Style.data}>
                <p className={Style.logoText}>{selectedGroupName}</p>
            </div>
            
        </nav>

        <div className={Style.prevNotes}>

            <table className={Style.table}>
                <tbody className={Style.tbody}>
                    {
                        newNote.length !==0 && (
                            newNote.map((chat , index) => (
                                <tr className={Style.row} key={index}>
                                    <td className={Style.rowData}>
                                        <div className={Style.time}>
                                            <p>{chat.time}</p>
                                            <p>{chat.date}</p>
                                        </div>
                                    </td>
                                    <td className={Style.rowData}>
                                        <div className={Style.wrap}>{chat.message}</div>
                                    </td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>

        <footer className={Style.footer}>
            <textarea 
                placeholder='Enter your text here...........' 
                value={note}
                className={Style.textarea}
                onKeyDown={handleKeyDown}
                onChange={handleOnChange}
            />
            <IoSendSharp size={25} className={Style.sendicon} onClick={handleOnSave}/>
        </footer>
    </div>
  )
}

export default NotesArea