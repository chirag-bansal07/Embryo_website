import"./header.css"
import React from 'react'
import logo from "./vid/logo.png"
function Header(props) {
  const toindex=()=>{
    props.backto();
    console.log("cliked");
  }
  return (
    <div className={`header ${props.index?"bb":""}`}>
        <div className='cover'>
            <img onClick={toindex} className={`logo ${!props.index ? "out" : "" }`} src={logo} alt='logo'></img>
            
        </div>
        <p className={`para ${props.index?"hide":""}`}>WELCOME TO BITS-EMBRYO</p>
    </div>
  )
}

export default Header