
import React from 'react';
import { Header } from 'semantic-ui-react';

import { Link } from 'react-router-dom';
import './style.css';


const HeaderApp = () => {
  return (
    <Header>
    <div className='ui inverted segment'>
      <div className='ui inverted menu' className='container'>
        <a className=' item' href='/'>Home</a>
        <a className='item' href='/games'>Games</a>
        <a className='item' href='/map'>Map</a>
      </div>
    </div>
    </Header>
    )
}

export default HeaderApp;
