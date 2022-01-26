import React from 'react';
import Logo from './Logo.jsx';
import Upload from './Upload.jsx';

function Header(props) {

  return (
    <header>
      <Logo/>
      <button onClick={() => props.setDisplay(!props.display)}>Upload Art</button>
    </header>
  )
}

export default Header;