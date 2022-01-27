import React from 'react';

function Upload(props) {

  return (
    <form action="/api/" method="POST">
      <label> Art Title <br/>
        <input type="text" name="title" autoComplete="off" placeholder="title" required/>
      </label>
      <label> Art URL <br/>
        <input type="text" name="art" autoComplete="off" placeholder="URL" required/>
      </label>
      <label> Artist Name <br/>
        <input type="text" name="artist" autoComplete="off" placeholder="artist" required/>
      </label>
      <label> Description <br/>
        <textarea name="description" rows="10" cols="50" style={{resize: "none"}}></textarea>
      </label>
      <input type="submit"/>
    </form>
  )
}

export default Upload;