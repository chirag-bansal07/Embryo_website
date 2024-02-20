import React from 'react'
import "./lec-button.css"
function Lecbutton(props) {
  return (
    <div><button className='btn-lecs'>
    <div class="default-btn">
      <span>{props.name}</span>
    </div>
    <div class="hover-btn">
      <span>{props.topic}</span>
    </div>
  </button></div>
  )
}

export default Lecbutton