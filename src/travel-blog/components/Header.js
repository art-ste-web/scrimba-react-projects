import logo from '../img/earth-icon.svg';

function Header() {
    return(
        <header className="header">
            <img src={logo} alt="earth icon" />
            <h1>my travel journal.</h1>
        </header>
    )
}

export default Header;