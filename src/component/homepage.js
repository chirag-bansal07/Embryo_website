import Header from "./header";
import "./homepage.css";
import MyFlipBook from "./flip";
import { useState, useRef } from "react";
function Homepage() {
  const videoRef = useRef(null);
  const[logoin,setlogoin]=useState(false);
  const[bganimation,setbganimation]=useState(false);
  const[toindex,settoindex]=useState(0);
  const datahandle=(data)=>{
    setlogoin(data);
  }
  const animationhandle=(animate)=>{
    setbganimation(animate);
  }
  const indexing=()=>{
    settoindex(3);
    console.log("clicked");
  }
  const indexreset=()=>{
    settoindex(0);
    console.log("reset");
  }
  return (
    <>
    <div className="main-container">
      {<img
       ref={videoRef}
       src="https://howtotalktowhitekidsaboutracism.com/bg.707b1e7c.jpg"
       alt=" "
       className={`background-img ${bganimation?"bganimate":""}`}></img>}
    <Header index={logoin} backto={indexing} />
    <MyFlipBook data={datahandle} animate={animationhandle} backto={toindex} reset={indexreset} />
    </div>
    </>
  );
}

export default Homepage;
