import React from 'react';
function Art(props) {
  
  return (
    <figure>
      <img src={props.artPost.art} onError={() => props.selfTerminate(props.artPost._id)}/>
      <div className="info">
        <figcaption>
          <h1>{props.artPost.title}</h1>
          <h3>Created By: {props.artPost.artist}</h3>
          <h3>Date: {props.artPost.date}</h3>
          <p>{props.artPost.description}</p>
        </figcaption>
        <div className="likes">
          Likes: {props.artPost.likes}
        </div>
        <ul className="commentBox">
        </ul>
        <form action={`/api/${props.artPost._id}`} method="PUT">
          <input type="text"/>
          <input type="submit"/>
        </form>
      </div>
    </figure>
  )
}

export default Art;