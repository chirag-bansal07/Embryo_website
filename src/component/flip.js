import React, { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import"./flip.css"
import logo from "./vid/logo.png"
import Teamcardbook from './UI/teamcardbook';
import podium from "./vid/podium.png"
import Lecbutton from './UI/lec-button';
import Panelcard from './UI/panelcard';
import Slider from 'react-slick';
import mail from "./UI/icons/mail.svg"; 
import poster from "./images/poster.jpg";
import call from "./UI/icons/call.svg";
import Socials from './UI/socials';
import TestSlider from './UI/testimo_slider';
import frame from "./vid/Blackboard_004.png";
import bulb from "./vid/bulb.png"
const MyFlipBook = (props) => {
  const [open,setopen]=useState(false)
  const [animation,setanimation]=useState(false)
  const navtoabout=()=>{
    flipBookRef.current.pageFlip().flipNext();
  }
  useEffect(()=>{
    flipBookRef.current.pageFlip(3);
    props.reset();
    console.log("working");
  }, [props.backto])
  const navtoLec=()=>{
    flipBookRef.current.pageFlip().flipNext();
    setTimeout(() => {
      flipBookRef.current.pageFlip().flipNext()
    }, 900);
  }
  const navtoAIC=()=>{
    flipBookRef.current.pageFlip().flipNext();
    setTimeout(() => {
      flipBookRef.current.pageFlip().flipNext()
    }, 900);
    setTimeout(() => {
      flipBookRef.current.pageFlip().flipNext()
    }, 1800);
  }
  const navtoconc=()=>{
    flipBookRef.current.pageFlip().flipNext();
    setTimeout(() => {
      flipBookRef.current.pageFlip().flipNext()
    }, 900);
    setTimeout(() => {
      flipBookRef.current.pageFlip().flipNext()
    }, 1800);
    setTimeout(() => {
      flipBookRef.current.pageFlip().flipNext()
    }, 2700);
  }
  
  const navigate=()=>{
    setanimation(true);
    props.animate(true);
    setTimeout(() => {
      flipBookRef.current.pageFlip().flipNext()
    }, 1500);
    
  }
const flipBookRef = useRef(null);
const handleFlip = (data) => {
    if(data.data!==0){
      setopen(true);
      setanimation(true)
      props.data(true)
    }
    else{
      setopen(false);
      props.data(false);
    }
};

  return (
    <>
    <div className='flipbook'>
      <div className={`arrow-div ${!animation ?"hide":""}`} onClick={() =>flipBookRef.current.pageFlip().flipPrev()} >
        <img src="https://howtotalktowhitekidsaboutracism.com/arrow.3779d7ca.png" alt='prev' className='prev'></img>
      </div>
      <HTMLFlipBook 
        className={`book ${open?"open":""} ${!open && animation?"close":""} ${animation?" animating":""}`} 
         width={400} height={450} 
         ref={flipBookRef} 
         onFlip={(data) => handleFlip(data)} 
         mobileScrollSupport={true} 
         flippingTime= {1500}
         >
        <div className="page one left" data-density="hard" >
        </div>
        <div className={`page two right ${!animation?"boxshadow":"" }`}  data-density="hard" >
         <img src={logo} className='logo-book'></img>
        </div>  
        <div className="page three left" data-density="hard" >
          <h1 className='head'>IND</h1>
          <div>
          <button className='nav abo' onClick={navtoabout}>ABOUT</button>
          <button className='nav teams' onClick={navtoabout}>TEAM</button>
          <button className='nav AIC' onClick={navtoAIC}>APOGEE Inovation Challenge</button>
          <button className='nav test' onClick={navtoAIC}>Testimonials</button>
          </div>
        </div>
        <div className="page four right" data-density="hard">
          <h1 className='head'>EX</h1>
          <button className='nav lec' onClick={navtoLec}>Lectures</button>
          <button className='nav pannel' onClick={navtoLec}>Panel</button>
          <button className='nav contact' onClick={navtoconc}>Contact Us</button>
          <button className='nav event' onClick={navtoconc}>Upcomming Event</button>
        </div>
        <div className="page about left" data-density="hard">
          <h1 className='heading'>ABOUT</h1>
          <p className='about-para'>BITS Embryo is an Institute body that aims to improve students' learning experience and exposure to various domains.
           We, at BITS Embryo, believe in 'Borderless Classrooms & Bottomless Resources'.
           </p>
           <p className='about-para long'>We are an enthusiastic closely-knit group that is responsible for organising talks by distinguished professionals, in their respective fields, for the benefit of the students.
           Embryo is a project to foster strong collaboration of BITS students and BITS faculty with the alumni and friends of BITS Pilani.</p>
           <button className='about-btn'>Know More</button>
        </div>
        <div className="page team right" data-density="hard">
          <h1 className='heading'>TEAM</h1>
          <div className='carddiv'>
          <Teamcardbook />
          </div>
          <button className='team-btn'>Know Our Team</button>
        </div>
        <div className="page lectures left" data-density="hard" >
        <h1 className='heading'>LECTURES</h1>
        <img src={podium} className='podium'></img>
        <p className='lec-para'>BITS-Embryo has hosted multiple guests like!</p>
        <div className="lec1">
        <Lecbutton name="Anupam Purwar" topic="Harnessing GenAI & ML"/>
        </div>
        <div className="lec2" >       
        <Lecbutton name="Dr. Aditi Sen De" topic="Myth to Math"/>
        </div>
        <div className="lec3">
        <Lecbutton name="Alok Misra" topic='AMA on Investment Banking'/>
        </div>
        <button className='lec-more'>View ALL</button>
        </div>
        <div className="page pannelpage right" data-density="hard">
        <h1 className='heading'>PANELS</h1>
        <div className='card-pan1'>
        <Panelcard title="Gateway to GRE 2023" head="Panel Menbers " disc={["Pratyush admanabhan",<br/> ,"Sumantrak Mukherjee",<br/>, "Samaksh Judson",<br/>, "Dhruv Shah" ]}/>
        </div>
        <div className='card-pan2'>
        <Panelcard title="CAT Champs 2024" head="Panel Menbers " disc={["Adit kalbalia",<br/> ,"Arun Kumar",<br/>, "Dhruv Jajoo"]}/>        
        </div>
        <button className='lec-more pan-more'>View ALL</button>
        </div>
        <div className="page AICpage left" data-density="hard" >
        <h1 className='heading'>AIC</h1>
        <p className='about-para AIC-para AIC-long'>APOGEE, the ISO 9001:2008 certified technical fest of BITS, Pilani is a large scale event that has attracted connoissuers of engineering and technology over the years. It represents the zenith of science and engineering in a landscape of future vissionaries and scientists.</p>
           <p className='about-para AIC-para '>Apogee Innovation Challenge is a kernel event of Apogee, which provides a platform for students from different colleges of the country to work on the real life problem statements posed by companies. But how does it work? click to know more</p>
           <button className='about-btn AIC-btn'>Know More</button>       
        </div>
        <div className="page testimonials left" data-density="hard" >
          
        <h1 className='heading'>Testimonials</h1>
        <TestSlider />
        <img src={frame} className='frame' alt=' '></img>
        <img src={bulb} className='bulb'  alt=' '></img> 
        </div><div className="page contact-us left" data-density="hard" >
        <h1 className='heading'>Contact-Us</h1>
        <div class="center-body">
          <div class="loader-shape-3"></div>
          <p className='contact-para'>BITS Pilani <br/>
            Pilani,Rajasthan 333031</p>
        </div>
        <img className='mail-icon' src={mail} alt='mail'/>
        <p className='mailID'>f20210672@pilani.bits-pilani.ac.in</p>
        <div className='call-div'>
        <img src={call} className='call'></img>
        <p>+91 7738536656</p>
        <div className='socials-div'>
          <Socials/>
        </div>
        </div>
        </div><div className="page upcomming left" data-density="hard" >
        <h1 className='heading'>UPCOMING EVENT!!</h1>
        <div className='poster-div'>
        <img className='poster' src={poster} alt='NO EVENTS NEARBY'></img>
        </div>
        </div>
      </HTMLFlipBook>
      <button className={`navigate ${animation?"hide":""}`}onClick={navigate}> NAVIGATE</button>
      <div className={`arrow-div ${!animation ?"hide":""}`} onClick={() =>flipBookRef.current.pageFlip().flipNext()}>
        <img src="https://howtotalktowhitekidsaboutracism.com/arrow.3779d7ca.png" alt='next' className='next'></img>
      </div>
      </div>
    </>
  );
};

export default MyFlipBook;