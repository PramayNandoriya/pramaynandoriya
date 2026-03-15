/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import "./Hero.css";
import profile_img from "/src/assets/pramay.jpg";
import resume from "../../assets/PramayNandoriya _React.Js.pdf";
import Switch from '/src/Components/Switch/Switch.jsx';
import Social from "/src/Components/Social/Social.jsx";


const Hero = () => {

  
  return (
    <div id='home' className="hero">

      <div className="hero-content">
        <div className="light-dark">

        </div>
        {/* <DarkMode /> */}
        {/* <Switch /> */}
        <img src={profile_img} alt="Profile" />
        <h1>
          <span>PRAMAY here,</span> FrontEnd Developer
        </h1>
        <p>
          I’m a React.js Front-End Developer with 1+ year of experience building responsive and scalable web applications. I enjoy turning complex ideas into clean, user-friendly interfaces with strong performance and modern UI.
        </p>
        <div className="hero-action">
          <div className="hero-connect">
            <a href="#contact">Connect with me</a></div>
          <div className="hero-resume">
            <a href={resume} download>
              My resume
            </a>
          </div>
        </div>
      </div>
      <div className="hero-social-right">
        <Social />
      </div>
    </div>
  );
};

export default Hero;
