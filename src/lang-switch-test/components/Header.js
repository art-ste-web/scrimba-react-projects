import { useState } from "react";
import LangTextData from "../LangTextData";

function Header(props) {
    const [navBarTxt, headerTxt, contentTxt] = LangTextData;
    const [elText, setElText] = useState(headerTxt);
    const headTxt = props.lang === 'ua' ? elText.header.mainHeaderText.ua : elText.header.mainHeaderText.ru;
    const descTxt = props.lang === 'ua' ? elText.header.descText.ua : elText.header.descText.ru;
    const btnTxt = props.lang === 'ua' ? elText.header.btnText.ua : elText.header.btnText.ru;
    return(
        <header className="lang-header">
            <h1>{headTxt}</h1>
            <p>{descTxt}</p>
            <button>{btnTxt}</button>
        </header>
    )
}

export default Header;