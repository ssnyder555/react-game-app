
import React from 'react';
import { Header } from 'semantic-ui-react';

import { Link } from 'react-router-dom';


const HeaderApp = () => {
  return (
    <Header>
      <ul>
        <li><Link to="/games">Games</Link></li>
      </ul>
    </Header>
    )
}

export default HeaderApp;
