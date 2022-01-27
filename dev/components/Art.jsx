import React from 'react';
import { useState } from 'react';

function Art(props) {

  const [comment, setComment] = useState('');
  const [commentList, updateCommentList] = useState(props.artPost.comments);

  const comments = commentList.map((commentEntry, idx) => {
    return <li key={String(props.artPost._id) + String(idx)}>{commentEntry.user}: {commentEntry.comment}</li>
  });

  function sendComment(event) {
    setComment(event.target.value);
  }

  function startPatch() {
    fetch(`/api/${props.artPost._id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(props.artPost.comments.concat({
        user: 'Miko',
        comment: comment
      }))
    })
      .then(res => res.json())
      .then(data => {
        updateCommentList(data);
      });
  }

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
          {comments}
        </ul>
          <input type="text" onChange={sendComment} name="comment"/>
          <button onClick={startPatch}>Send</button>
      </div>
    </figure>
  )
}

export default Art;