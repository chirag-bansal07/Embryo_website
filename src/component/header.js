import"./header.css"
import React from 'react'
import logo from "./vid/logo.png"
function Header(props) {
  return (
    <div className='header'>
        <div className='cover'>
            <img className={`logo ${props.page===0 ? "out" : "" }`} src={logo} alt='logo'></img>
            {console.log(props.page)}
        </div>
    </div>
  )
}

export default Header