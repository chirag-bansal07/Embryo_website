import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import"./flip.css"
import logo from "./vid/logo.png"

const MyFlipBook = (props) => {
  const [open,setopen]=useState(false)
  let flag=1;
  const [animation,setanimation]=useState(false)
  const navtoabout=()=>{
    flipBookRef.current.pageFlip().flipNext();
  }
  const navtoAIC=()=>{
    flipBookRef.current.pageFlip().flipNext();
    setTimeout(() => {
      flipBookRef.current.pageFlip().flipNext()
    }, 900);
  }
  const navtoLec=()=>{
    flipBookRef.current.pageFlip().flipNext();
    setTimeout(() => {
      flipBookRef.current.pageFlip().flipNext()
    }, 900);
    setTimeout(() => {
      flipBookRef.current.pageFlip().flipNext()
    }, 900);
  }
  const navtoTeast=()=>{
    flipBookRef.current.pageFlip().flipNext();
    setTimeout(() => {
      flipBookRef.current.pageFlip().flipNext()
    }, 900);
    setTimeout(() => {
      flipBookRef.current.pageFlip().flipNext()
    }, 900);
    setTimeout(() => {
      flipBookRef.current.pageFlip().flipNext()
    }, 900);
  }
  
  const navigate=()=>{
    setanimation(true);
    props.animate(true);
    flag=0;
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
      <div className={`arrow-div ${!animation ?"hide":""}`} onClick={() =>flipBookRef.current.pageFlip().flipPrev()}>
        <img src="https://howtotalktowhitekidsaboutracism.com/arrow.3779d7ca.png" alt='prev' className='prev'></img>
      </div>
      <HTMLFlipBook 
        className={`book ${open && !flag ?"open":""} ${!open && !flag?"close":""} ${animation?" animating":""}`} 
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
          <button className='nav' onClick={navtoabout}>ABOUT</button>
          <button className='nav' onClick={navtoabout}>TEAM</button>
          <button className='nav' onClick={navtoAIC}>AIC</button>
          <button className='nav' onClick={navtoAIC}>pannel</button>
          </div>
        </div>
        <div className="page four right" data-density="hard">
          <h1 className='head'>EX</h1>
          <button className='nav' onClick={navtoLec}>Lectures</button>
          <button className='nav' onClick={navtoTeast}>Testimonials</button>
        </div>
        <div className="page about left" data-density="hard">
          <h1 className='heading'>ABOUT</h1>
          <p></p>
        </div>
        <div className="page two right" data-density="hard">
          Page 6
        </div>
        <div className="page three left" data-density="hard" >
          Page 7
        </div>
        <div className="page one right" data-density="hard">
        </div>
      </HTMLFlipBook>
      <button className={`navigate ${animation?"hide":""}`}onClick={navigate}> navigate</button>
      <div className={`arrow-div ${!animation ?"hide":""}`} onClick={() =>flipBookRef.current.pageFlip().flipNext()}>
        <img src="https://howtotalktowhitekidsaboutracism.com/arrow.3779d7ca.png" alt='next' className='next'></img>
      </div>
      </div>
    </>
  );
};

export default MyFlipBook;