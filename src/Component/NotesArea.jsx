import React, { useEffect, useState } from 'react'
import Style from "../Styles/NotesArea.module.css"
import {IoSendSharp} from "react-icons/io5"

const NotesArea = ({selectedGroupColor , selectedGroupName}) => {

    // for typing 
    const [note , setNote] = useState("");

    // for display messages
    const [newNote , setNewNote] = useState([]);

    const time = new Date();

    const handleOnChange = (e) => {
        setNote(e.target.value);
    }

    const currentTime = () => {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let ampm = hours >= 12 ? 'Pm' : 'Am';
        { hours < 10 && (hours = "0"+hours) }
        { hours > 12 && (hours = hours - 12) }
        { minutes < 10 && (minutes = "0"+minutes) }
       
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
        if(newMsg.message.length !==0){             
            setNewNote([newMsg,...newNote])
            localStorage.setItem(selectedGroupName , JSON.stringify([newMsg,...newNote]))
            setNote("")
        }
    }

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem(selectedGroupName)) || [];
        setNewNote(savedNotes);
    }, [selectedGroupName])
    

  return (
    <div className={Style.main}>
        <nav className={Style.nav}>
            <div 
                className={Style.logo}
                style={{ backgroundColor: selectedGroupColor}}
            >AN</div>
            <p className={Style.logoText}>{selectedGroupName}</p>
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
                                    <td className={Style.rowData}>{chat.message}</td>
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
                onChange={handleOnChange}
            />
            <IoSendSharp size={25} className={Style.sendicon} onClick={handleOnSave}/>
        </footer>
    </div>
  )
}

export default NotesArea