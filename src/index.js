import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import StartProject from './start-project/StartProject';
import BuisnessCard from './buisness-card/BuisnessCard';
import AirBnbClone from './air-bnb-clone/AirBnbClone';
import TravelBlog from './travel-blog/TravelBlog';
import LangSwitchTest from './lang-switch-test/LangSwitchTest';



ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StartProject /> */}
    {/* <BuisnessCard /> */}
    {/* <AirBnbClone /> */}
    {/* <TravelBlog /> */}
    <LangSwitchTest />
  </React.StrictMode>,
  document.getElementById('root')
);

