import { useSelector } from "react-redux";
import MessageRow from "../MessageRow/MessageRow";


const Inbox = ({ deleteButtonType }) => {

    const inboxMails = useSelector(state => state.mail.inboxMails);

    let mailRows = inboxMails
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
            <h2>Входящие</h2>
            {mailRows}
        </div>
    )
}

export default Inbox;