import React from 'react'
import Style from "../Styles/NotesArea.module.css"
import {IoSendSharp} from "react-icons/io5"

const NotesArea = () => {
  return (
    <div className={Style.main}>
        <nav className={Style.nav}>
            <div className={Style.logo}>AN</div>
            <p className={Style.logoText}>Apne Notes</p>
        </nav>

        <div className={Style.prevNotes}>
            <table className={Style.table}>

                <tr className={Style.row}>

                    <td className={Style.rowData}>
                        <div className={Style.time}>
                            <p>10:10 Am</p>
                            <p>9 March 2023</p>
                        </div>
                    </td>

                    <td className={Style.rowData}>Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</td>
                </tr>

                <tr className={Style.row}>
                    <td className={Style.rowData}>
                        <div className={Style.time}>
                            <p>10:10 Am</p>
                            <p>9 March 2023</p>
                        </div>
                    </td>

                    <td className={Style.rowData}>Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</td>
                </tr>

                <tr className={Style.row}>
                    <td className={Style.rowData}>
                        <div className={Style.time}>
                            <p>10:10 Am</p>
                            <p>9 March 2023</p>
                        </div>
                    </td>

                    <td className={Style.rowData}>Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</td>
                </tr>

                <tr className={Style.row}>
                    <td className={Style.rowData}>
                        <div className={Style.time}>
                            <p>10:10 Am</p>
                            <p>9 March 2023</p>
                        </div>
                    </td>

                    <td className={Style.rowData}>Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</td>
                </tr>

            </table>
        </div>

        <footer className={Style.footer}>
            <textarea placeholder='Enter your text here...........' className={Style.textarea}>
            {/* <IoSendSharp size={25} className={Style.sendicon}/> */}
            </textarea>
            <IoSendSharp size={25} className={Style.sendicon}/>
        </footer>
    </div>
  )
}

export default NotesArea