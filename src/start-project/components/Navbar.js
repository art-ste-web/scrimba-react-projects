import logo from '../img/logo.svg';

function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar__logo-wrapper">
                <img className='navbar__logo' src={logo} alt="logo"/>
                <h2 className='navbar__title'>ReactFacts</h2>
            </div>
            <p className='navbar__desc'>React course - Project 1</p>
        </nav>
    )
}

export default Navbar