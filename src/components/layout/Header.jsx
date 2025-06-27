import './Header.css'
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <>
            <header className="header">
                <Link className="header__logo" to="/">
                    <img src="./icons/logo.png"
                    alt="Human System logo"
                    className="header__logo-img"
                    width="150"
                    height="75"
                    />
                </Link>
                <nav className="header__menu">
                    <ul className="header__list">
                        <li className="header__list-item">
                            <Link to="/" className="header__list-link">Главная</Link>
                        </li>
                        <li className="header__list-item">
                            <Link to="/products" className="header__list-link">Программы 1С</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
