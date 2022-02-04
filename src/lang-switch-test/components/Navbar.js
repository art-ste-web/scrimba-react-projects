import React, {useState} from "react";
import LangTextData from "../LangTextData";

function Navbar(props) {
    const [navBarTxt, headerTxt, contentTxt] = LangTextData;
    const [elText, setElText] = useState(navBarTxt);
    const getNavItemsTxt = props.lang === 'ua' ? elText.navbar.navMenuText.ua : elText.navbar.navMenuText.ru
    let navItems = getNavItemsTxt.map(navItem =>{
        return(
            <li key={navItem}><a href='#'>{navItem}</a></li>
        )
    })
    return(
        <nav className="lang-navbar">
            <div className="logo"></div>
            <ul className="lang-nav-menu">
                {navItems}
            </ul>
            <ul className="lang-switch">
                <li><button className="ua-lang-btn" onClick={props.switchToUa}>ua</button></li>
                <li><button className="ru-lang-btn" onClick={props.switchToRu}>ru</button></li>
            </ul>
        </nav>
    )
}

export default Navbar;