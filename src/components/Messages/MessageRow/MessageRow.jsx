import { useNavigate } from 'react-router-dom';
import style from './MessageRow.module.css'
import { useDispatch } from 'react-redux';
import { selectMail } from '../../../redux/mailSlice';


const MessageRow = ({ id, adress, subject, description, time, direction, deleteButtonType }) => {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const deleteMail = () => dispatch(deleteButtonType({ id, adress, subject, description, time, direction }))

    const openMail = () => {
        dispatch(
            selectMail({
                adress,
                subject,
                description,
                time,
                direction
            })
        );

        navigate('/message');
    }

    return (
        <div className={style.messageRow}>

            <span className={style.messageRow__delete} onClick={deleteMail}>&times;</span>

            <div className={style.messageRow__body} onClick={openMail}>
                <div className={style.messageRow__adress}>
                    {adress}
                </div>
                <div className={style.messageRow__message}>
                    <h4 className={style.messageRow__subject}>{subject}{" "}
                        <span className={style.messageRow__description}>{description}</span>
                    </h4>

                </div>

                <p className={style.messageRow__time}>{time}</p>
            </div>

        </div>
    )
}

export default MessageRow;