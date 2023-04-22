import React from 'react'

function Card({title,text}) {
  return (
    <article>
        <span> Ce qui suit vient des cards</span>
        <h3>{title}</h3>
        <p>{text}</p>
    </article>
  )
}

export default Card