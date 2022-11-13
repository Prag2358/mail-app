import style from './Header.module.css'
import logo from '../../images/mail-logo.png'

const Header = (props) => {
    return (
        <div className={style.Header}>
            <img src={logo} className={style.logo} alt="logo" />
            <h1>Почтовое приложение</h1>
        </div>
    )
}

export default Header;