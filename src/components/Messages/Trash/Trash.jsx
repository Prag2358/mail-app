import { useSelector } from "react-redux";
import MessageRow from "../MessageRow/MessageRow";

const Trash = ({ deleteButtonType }) => {
    const trashMails = useSelector(state => state.mail.trashMails);

    let mailRows = trashMails
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
            <h2>Удаленные</h2>
            {mailRows}
        </div>
    )
}

export default Trash;