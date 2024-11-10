import React from 'react';
import Image from 'next/image';
import Button from './Button';


function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-image-container">
        <Image
          src="/images/Erum_Logo.jpeg"
          alt="image"
          width={350}
          height={350}
          className="hero-image"
        />
      </div>
      <div className="hero-text-container">
        <h1 className="hero-greeting">Hi I am</h1>
        <span className="hero-name">ERUM WARIS</span>
        <br />
        <h2 className="hero-description">
          I am a Passionate Learner. As a Next.js enthusiast, I focus on fast, scalable, and efficient websites.
        </h2>
        <Button text="Hire Me" href="mailto:erumwaris93@gmail.com" />
      </div>
    </div>
  );
}

export default HeroSection;
