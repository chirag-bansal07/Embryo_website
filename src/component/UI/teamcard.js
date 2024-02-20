import React from 'react'
import logo from "../vid/logo.png"
import "./teamcard.css"
function Teamcard() {
  return (
    <div className='cardmain'>
        <div className='img-cover'>
        <img src={logo} className='img'></img>
        </div>
        <p className='mail'>mail</p>
        <div className='bottom'>
            <h3 className='post'>President</h3>
            <p className='dis'>dwdkmwoefna owjdsla soefmwed fawpoecaes,awnoefipmaw esklk</p>
            <div className='socials'>
                <p>insta</p>
                <p>facebook</p>
                <p>linkedIN</p>
            </div>
        </div>
    </div>
  )
}

export default Teamcard