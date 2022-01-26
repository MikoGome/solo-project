import React from "react";

function Art(props) {
  console.log(props);
  return (
    <figure>
      <img src={props.artPost.art}/>
      <h1>{props.artPost.title}</h1>
      <h2>{props.artPost.artist}</h2>
      <h2>{props.artPost.date/*.toDateString()*/}</h2>
      <p>{props.artPost.description}</p>
    </figure>
  )
}

export default Art;