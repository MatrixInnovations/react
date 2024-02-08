import React from 'react';
import Heart from '../../assets/Heart.mp4';  
import './hero.css';


const Hero = () => {
  return (
    <div className="video-background">
      <video id="background-video" loop autoPlay className="background-tint"  muted>
        <source src={Heart} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h1>LL13Fitness</h1>
      </div>
    </div>
  );
};

export default Hero;
