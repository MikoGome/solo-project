import React from 'react';

function Upload(props) {

  return (
    <form action="/api/" method="POST">
      <input type="text" name="title" placeholder="title" required/><hr/>
      <input type="text" name="art" placeholder="URL" required/><hr/>
      <input type="text" name="artist" placeholder="artist" required/><hr/>
      <label>
        <input type="checkbox" name="tags" value="male"/>
        Male
      </label><br/>
      <label>
        <input type="checkbox" name="tags" value="female"/>
        Female
      </label><hr/>
      <textarea name="description"></textarea><hr/>
      <input type="submit"/>
    </form>
  )
}

export default Upload;