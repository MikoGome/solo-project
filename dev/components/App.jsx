import React, { useState } from 'react';
import Header from './Header.jsx';
import ArtBoard from './ArtBoard.jsx';
import Upload from './Upload.jsx';


function App(props) {
  const [display, setDisplay] = useState(true);
  
  if(display) {
    return (
      <>
        <Header setDisplay={setDisplay} display={display}/>
        <ArtBoard/>
      </>
    )
  } else {
    return (
      <>
        <Header setDisplay={setDisplay} display={display}/>
        <Upload/>
      </>
    )
  }
}

export default App;