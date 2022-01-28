import React from 'react';
import Logo from './Logo.jsx';
import Upload from './Upload.jsx';

function Header(props) {
  console.log('this', props.user);
  return (
    <header>
      <input type='text' onChange={(e) => props.setUser(e.target.value)} value={props.user} placeholder='username'/>
      <Logo/>
      <button onClick={() => props.setDisplay(!props.display)}>{props.display ? 'Upload Art' : 'Look at Art'}</button>
    </header>
  )
}

export default Header;