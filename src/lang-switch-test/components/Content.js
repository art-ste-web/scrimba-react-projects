import { useState } from 'react';
import LangTextData from "../LangTextData";

function Content(props) {
    const [navBarTxt, headerTxt, contentTxt] = LangTextData;
    const [elText, setElText] = useState(contentTxt);
    const headTxt = props.lang === 'ua' ? elText.content.firstHeaderText.ua : elText.content.firstHeaderText.ru;
    const parTxt = props.lang === 'ua' ? elText.content.firstParText.ua : elText.content.firstParText.ru;
    return(
        <main className="lang-content">
            <h1>{headTxt}</h1>
            <p>{parTxt}</p>
        </main>
    )
}

export default Content;