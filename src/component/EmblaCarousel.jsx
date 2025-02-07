import React from 'react';
import "../style/EmblaCarousel.css";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import js from "../Assets/js.png";
import react from "../Assets/react1.png";
import redux from "../Assets/redux.png";
import express from "../Assets/express.png";
import python from "../Assets/python.png";
import gsap from "../Assets/gsap.png";
import mongo from "../Assets/mongo.png";
import node from "../Assets/node.png";
import mysql from "../Assets/mysql.png";
import docker from "../Assets/docker.png";
import azure from "../Assets/azure.png";

const EmblaCarousel = () => {
  const images = [html, css, js, react, redux,node,mongo,mysql,express,gsap,python,docker,azure];

  return (
   
    <div className='box'>
      <h1 className="skills">My Skills</h1>
      <div className="marquee">
        <div className="slideTrack">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`slide-${index}`} />
          ))}
          
        </div>
      </div>

    </div>
  );
};

export default EmblaCarousel;
