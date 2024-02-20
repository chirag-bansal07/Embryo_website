// TestSlider.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimo_slider.css'; // Import CSS for custom styling

const TestSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { test: 'It was a wonderful and engaging experience thanks to team Embryo', by: 'Imtiaz Ali' },
    { test: 'Totally enjoyed everything here. The questions asked by the students were great. Best of luck everyone!', by: 'Sandeep Jain' },
    { test: 'Excellent planning. Tremendously courteous. Absolutely brilliant. Sums up the Embryo crew!', by: 'Tanushree Bagrodia' },
    {test:"Unity is strength. Loved the management, hospitality and love from students in Pilani. Thanks to the Director and VC sir.Regards", by:"Ritu Rani"},
    {test:"Thank you for all your hospitality and making it so memorable. Wish you all the very best and i'm sure you're going to rock the world because 'HALLA TO HOGA HI!!!'", by:"Tania Sachdev"},
    {test:"Energizing to be among the bright BITSian minds.", by:"Tanmay Kumar"},
    {test:"Live - Here and NowLearn - ForeverBest...", by:"Vikas Aggarwal"},
    {test:"Nostalgia for me. Great work by students. Enjoyed my time with BITSians.", by:"Rajesh Raju"}
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="image-text-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className='main' key={index}>
            <p className="slide-text">{slide.test}</p>
            <div className="text-container">
              <p>{slide.by}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestSlider;
