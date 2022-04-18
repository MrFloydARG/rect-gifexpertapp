import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="animate__animated animate__bounce">
      <img className="card"
        src={url}
        alt={title} />
      <p>{title}</p>
    </div>
  )
}
