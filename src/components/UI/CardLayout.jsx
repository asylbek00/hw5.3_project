import React from 'react'
import './CardLayout.css'

function CardLayout(props) {
  return (
    <div className='CardLayout'>{props.children}</div>
  )
}

export default CardLayout