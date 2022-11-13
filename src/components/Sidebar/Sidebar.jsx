import style from './Sidebar.module.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Sidebar = (props) => {
    const inboxhMailsCount = useSelector(state => state.mail.inboxMails).length;
    const sentMailsCount = useSelector(state => state.mail.sentMails).length;
    const trashMailsCount = useSelector(state => state.mail.trashMails).length;

    let activeStyle = {
        color: '#574b90',
    };

    return (
        <nav className={style.Sidebar}>
            <div className={style.item}><NavLink to="/newMessage"
                style={({ isActive }) => isActive ? activeStyle : undefined}>Написать</NavLink></div>
            <div className={style.item}><NavLink to="/inbox"
                style={({ isActive }) => isActive ? activeStyle : undefined}>Входящие ({inboxhMailsCount})</NavLink></div>
            <div className={style.item}><NavLink to="/sent"
                style={({ isActive }) => isActive ? activeStyle : undefined}>Отправленные ({sentMailsCount})</NavLink></div>
            <div className={style.item}><NavLink to="/trash"
                style={({ isActive }) => isActive ? activeStyle : undefined}>Удаленные ({trashMailsCount})</NavLink></div>
        </nav>
    )
}

export default Sidebar;

