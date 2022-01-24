import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import StartProject from './start-project/StartProject';
import BuisnessCard from './buisness-card/BuisnessCard';
import AirBnbClone from './air-bnb-clone/AirBnbClone'


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StartProject /> */}
    {/* <BuisnessCard /> */}
    <AirBnbClone />
  </React.StrictMode>,
  document.getElementById('root')
);

