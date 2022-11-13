import style from './MessageItem.module.css'
import { useSelector } from "react-redux";


const MessageItem = (props) => {
    const selectedMail = useSelector((state) => state.mail.selectedMail);

    return (
        <div className={style.MessageItem}>

            <div className={style.messageItem__body}>
                <div className={style.messageItem__header}>
                    <h2>{selectedMail.subject}</h2>
                    <p>{selectedMail.direction}{selectedMail.adress}</p>
                    <p className={style.messageItem__time}>{selectedMail.time}</p>
                </div>
                <div className={style.messageItem__message}>
                    <p>{selectedMail.description}</p>
                </div>
            </div>

        </div>
    )
}

export default MessageItem;
