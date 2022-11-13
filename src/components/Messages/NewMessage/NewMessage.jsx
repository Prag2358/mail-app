import { addMail } from "../../../redux/mailSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import style from './NewMessage.module.css'


const NewMessage = () => {
    const [adress, setAdress] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const newMessageItem = { adress, subject, description };

    const dispatch = useDispatch()

    const addMessage = () => {
        dispatch(addMail(newMessageItem))
        setAdress('');
        setSubject('');
        setDescription('');
    };

    return (
        <div>
            <h2>Написать письмо</h2>
            <label className={style.newMessageForm}>
                <input value={adress} onChange={e => setAdress(e.target.value)} placeholder='Кому' minlength="9" required />
                <input value={subject} onChange={e => setSubject(e.target.value)} placeholder='Тема' />
                <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder='Напишите что-нибудь'></textarea>
                <button className={style.submitButton} onClick={addMessage}>Отправить</button>
            </label>
        </div>
    )
}

export default NewMessage;