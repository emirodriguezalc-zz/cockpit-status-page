import React from 'react';
import DataBox from './components/dataBox/index';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className='main-wrapper'>
      <div className='main-header'>BRIDGE <img src={logo} className="app-logo" alt="logo"/> TECHNOLOGIES</div>
      <div className='main-content'>
        <h1 className='main-title'>SERVER STATUS</h1>
        <DataBox />
        <div className='main-footer'> Copyright © 2020 Bridge Technologies. All rights reserved</div>
      </div>
    </div>
  );
}

export default App;
