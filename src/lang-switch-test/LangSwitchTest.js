import { useState } from 'react';
import './LangSwitchTest.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Content from './components/Content';

function LangSwitchTest() {
    const [curLang, setCurLang] = useState('ua'); 
    const setUaLang = () => setCurLang('ua');
    const setRuLang = () => setCurLang('ru');
        
    
    return(
        <div className='lang-container'>
            <Navbar lang={curLang} switchToUa={setUaLang} switchToRu={setRuLang}/>
            <Header lang={curLang} switchToUa={setUaLang} switchToRu={setRuLang}/>
            <Content lang={curLang} switchToUa={setUaLang} switchToRu={setRuLang}/>
        </div>
    )
}

export default LangSwitchTest;