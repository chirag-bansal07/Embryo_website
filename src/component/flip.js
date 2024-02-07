import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import"./flip.css"
import arrow from "./vid/arrow.png";

const MyFlipBook = () => {
  const flipBookRef = React.useRef(null);

  return (
    <>
    <div className='flipbook'>
      <div className='arrow-div' onClick={() =>flipBookRef.current.pageFlip().flipPrev()}>
        <img src={arrow} alt='prev' className='prev'></img>
      </div>
      <HTMLFlipBook width={450} height={400} ref={flipBookRef}>
        <div className="page one" data-density="hard"  style={{ background: 'red' }}>
        </div>
        <div className="page two"  data-density="hard"  style={{ background: 'blue' }}>
          Page 2
        </div>
        <div className="page three" data-density="hard"  style={{ background: 'green' }}>
          Page 3
        </div>
        <div className="page four" data-density="hard" style={{ background: 'yellow' }}>
          Page 4
        </div>
        <div className="page three" data-density="hard" style={{ background: 'yellow' }}>
          Page 5
        </div>
        <div className="page two" data-density="hard" style={{ background: 'yellow' }}>
          Page 6
        </div>
        <div className="page three" data-density="hard"  style={{ background: 'yellow' }}>
          Page 7
        </div>
        <div className="page four" data-density="hard" style={{ background: 'yellow' }}>
          Page 8
        </div>
      </HTMLFlipBook>
      <div className='arrow-div' onClick={() =>flipBookRef.current.pageFlip().flipNext()}>
        <img src={arrow} alt='next' className='next'></img>
      </div>
      </div>
    </>
  );
};

export default MyFlipBook;