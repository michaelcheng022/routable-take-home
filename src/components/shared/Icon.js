import React from 'react'

const Icon = (props) => {
  return (
    <div className="icon-container">
      <img src={props.src} alt={props.alt} />
    </div>
  )
}

export default Icon
