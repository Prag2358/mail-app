import { useSelector } from "react-redux";
import MessageRow from "../MessageRow/MessageRow";


const Sent = ({ deleteButtonType }) => {
    const SentMails = useSelector(state => state.mail.sentMails);

    let mailRows = SentMails
        .map(mailItem => <MessageRow
            id={mailItem.id}
            adress={mailItem.adress}
            subject={mailItem.subject}
            description={mailItem.description}
            time={mailItem.time}
            direction={mailItem.direction}
            deleteButtonType={deleteButtonType}
        />)

    return (
        <div>
            <h2>Отправленные</h2>
            {mailRows}
        </div>
    )
}

export default Sent;