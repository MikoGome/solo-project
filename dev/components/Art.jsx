import React from 'react';
import { useState, useEffect } from 'react';

function Art(props) {

  const [comment, setComment] = useState('');
  const [commentList, updateCommentList] = useState(props.artPost.comments);
  const [likes, setLikes] = useState(props.artPost.likes);

  function displayComments(entries) {
    return entries.map((commentEntry, idx) => {
      return <li key={String(props.artPost._id) + String(idx)}>{commentEntry.user}: {commentEntry.comment}</li>
    });
  } 

  function sendComment(event) {
    setComment(event.target.value);
  }

  function startPatch(coms) {
    fetch(`/api/${props.artPost._id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({comments: coms.concat({
        user: 'Miko',
        comment: comment
      })})
    })
      .then(res => res.json())
      .then(data => {
        updateCommentList(data.comments);
        document.getElementById(props.artPost._id).value = "";
        setComment('');
      });
  }

  function pressEnter(e) {
    if((e.key === "Enter" || e.key === "NumpadEnter") && comment.length > 0) {
      startPatch(commentList);
    }
  }

  function liked() {
    fetch(`/api/${props.artPost._id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({likes: likes + 1})
    })
      .then(res => res.json())
      .then(data => {
        setLikes(data.likes);
      });
  }

  function scroll(element) {
    console.log(element);
  }

  useEffect(() => {
    document.getElementById('input' + props.artPost._id).scrollTo(0, document.getElementById('input' + props.artPost._id).scrollHeight)
  }, [commentList]);

  return (
    <figure>
      <section className='leftside'>
      <img src={props.artPost.art} onError={() => props.selfTerminate(props.artPost._id)}/>
      </section>
      <section className='rightside'>
      <div className="info">
        <figcaption>
          <h1>{props.artPost.title}</h1>
          <h3>Created By: {props.artPost.artist}</h3>
          <h3>Date: {props.artPost.date}</h3>
          <fieldset>
            <legend>Description</legend>
            <p>{props.artPost.description.length > 0 ? props.artPost.description : 'No description provided'}</p>
          </fieldset>
        </figcaption>
        <div className="likes">
          Likes: {likes}
          <button onClick={() => liked(likes)}>like</button>
        </div>
        <ul id={'input' + props.artPost._id} className="commentBox">
          {displayComments(commentList)}
        </ul>
        <div className="chat">
          <input id={props.artPost._id} type="text" autoComplete="off" onChange={sendComment} onKeyDown={e => pressEnter(e)} name="comment"/>
          <button onClick={() => {if(comment.length > 0) startPatch(commentList)}}>Send</button>
        </div>
      </div>
      </section>
    </figure>
  )
}

export default Art;