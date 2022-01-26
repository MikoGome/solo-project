import React from 'react';
import Tags from './Tags.jsx';

function Art(props) {
  const tags = props.artPost.tags.map(tag => {
    return <Tags key={props.artPost._id + tag} tag={tag}/>
  })
  
  return (
    <figure>
      <img src={props.artPost.art} onError={() => props.selfTerminate(props.artPost._id)}/>
      <h1>{props.artPost.title}</h1>
      <h2>{props.artPost.artist}</h2>
      <h2>{props.artPost.date}</h2>
      <div className="tags">
        {tags}
      </div>
      <p>{props.artPost.description}</p>
    </figure>
  )
}

export default Art;