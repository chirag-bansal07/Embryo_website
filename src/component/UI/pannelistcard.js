import React, { useState } from 'react'
import "./pannelistcard.css";
function Pannelsitcard() {
    const [Detail,setdetail]=useState(false);
    const detail=()=>{
        setdetail(!Detail)
    }
  return (
    <div>
        <div class="container">
    <div class="wrapper">
        {Detail?<div class="typewriter">
        <p>Lorem ipsum is a placeholder text that contains no intelligible meaning.</p>
        <p>It is a type of dummy text used in publishing and graphic design to demonstrate the visual form</p>
        <p> of a document or typeface without relying on meaningful content. Lorem ipsum has been used since the 1500s when an unknown printer</p>
        <p>scrambled a galley of type to make a type specimen book</p>
        </div>
            :
            <>
            <div class="banner-image"> </div>
            <h1>Speaker Name</h1>
            <p>TITle of the talk</p>
            </>}
      
     </div>
     <div class="button-wrapper"> 
     <button class="btn outline" onClick={detail}>{Detail?"Hide Details":"View Details"}</button>
     </div>
       </div>
   </div>
  )
}

export default Pannelsitcard