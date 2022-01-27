import React from 'react';
import Logo from './Logo.jsx';
import Upload from './Upload.jsx';

function Header(props) {

  return (
    <header>
      <div id="user">
        <h2>You are: </h2> 
      </div>
      <Logo/>
      <button onClick={() => props.setDisplay(!props.display)}>{props.display ? 'Upload Art' : 'Look at Art'}</button>
    </header>
  )
}

export default Header;