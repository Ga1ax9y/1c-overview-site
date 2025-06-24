import './Header.css'

export default function Header(){
    return (
        <>
            <header className="header">
                <a className="header__logo" href="/">
                    <img src="./icons/logo.png"
                    alt="Human System logo"
                    className="header__logo-img"
                    width="150"
                    height="75"
                    />
                </a>
                <nav className="header__menu">
                    <ul className="header__list">
                        <li className="header__list-item">
                            <a className="header__list-link">Главная</a>
                        </li>
                        <li className="header__list-item">
                            <a className="header__list-link">Программы 1С</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
