import Inbox from './Inbox/Inbox';
import Sent from './Sent/Sent';
import style from './Messages.module.css'
import { Route, Routes } from 'react-router-dom';
import NewMessage from './NewMessage/NewMessage';
import Trash from './Trash/Trash';
import MessageItem from './MessageItem/MessageItem';
import { removeToTrash, removeFromTrash } from "../../redux/mailSlice";

const Messages = (props) => {
    return (
        <div className={style.Messages}>
            <Routes>
                <Route path="/newMessage" element={<NewMessage />} />
                <Route path="/inbox" element={<Inbox deleteButtonType={removeToTrash} />} />
                <Route path="/sent" element={<Sent deleteButtonType={removeToTrash} />} />
                <Route path="/trash" element={<Trash deleteButtonType={removeFromTrash} />} />
                <Route path="/message" element={<MessageItem />} />
            </Routes>
        </div>
    )
}

export default Messages;