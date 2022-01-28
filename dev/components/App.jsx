import React, { useState } from 'react';
import Header from './Header.jsx';
import ArtBoard from './ArtBoard.jsx';
import Upload from './Upload.jsx';


function App(props) {
  const [display, setDisplay] = useState(true);
  const [user, setUser] = useState(localStorage.user ? localStorage.user : '');
  localStorage.user = user;
  
  if(display) {
    return (
      <>
        <Header setDisplay={setDisplay} display={display} user={user} setUser = {setUser}/>
        <ArtBoard user={user}/>
      </>
    )
  } else {
    return (
      <>
        <Header setDisplay={setDisplay} display={display} user={user} setUser = {setUser}/>
        <Upload user={user}/>
      </>
    )
  }
}

export default App;