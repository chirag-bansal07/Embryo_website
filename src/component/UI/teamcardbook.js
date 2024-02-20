import React from 'react'
import "./teamcardbook.css"
import img from"../images/prof.jpeg";
import mail from"./icons/mail.svg"
function Teamcardbook() {
  return (
    <div className='cardmain'>
        <div className='img-cover'>
        <img src={img} className='img'></img>
        </div>
        <a className='mail'><img src={mail} alt='MAIL'></img></a>
        <div className='bottom'>
            <h3 className='post'>Teacher In-Charge</h3>
            <p className='dis'>Dr. Rishikesh Vaidya</p>
            <div className='socials'>
                <p className='insta'><a href='' target='blank'>Insta</a></p>
                <p className='face'><a href='' target='blank'>Facebook</a></p>
                <p className='linked'><a href='' target='blank'>LinkedIN</a></p>
            </div>
        </div>
    </div>
  )
}

export default Teamcardbook