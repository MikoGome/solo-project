import React from 'react';
import Logo from './Logo.jsx';
import Upload from './Upload.jsx';

function Header(props) {

  return (
    <header>
      <button id="user">
        You are: <span>Miko</span> 
      </button>
      <Logo/>
      <button onClick={() => props.setDisplay(!props.display)}>{props.display ? 'Upload Art' : 'Look at Art'}</button>
    </header>
  )
}

export default Header;