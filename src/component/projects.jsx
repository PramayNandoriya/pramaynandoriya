import React from 'react';
import "../style/projects.css";
import { Carousel } from "antd";

const contentStyle = {
    margin: 0,
    color: "#fff",
    textAlign: "center",
    letterSpacing : "5px",
    marginTop : "8vh"

};

const carouselBox = {
    width: "75vw",
    marginTop: "5vh"

}

const contentDetails = {
    width: "60vw",
    height : "25vh",
    marginTop: "5vh",
    textAlign: "center",
}


///data

const dataCarousel = [
    {
        heading: "¬ Last Company Projects",
        details : "In the previous company, I made a fitness website, and the name was SSD Fitness. In this project, I used React.js, Redux.js, and MUI to develop a few components. I worked only on the front-end part, but good things were in this project. UI development was so hard because of the complex design and animation, but I successfully made this project. Also I worked other more then 5 projects.",
        // p : "The other project was a car parts selling web application. In this web application, I used React.js and Redux.js only and a little bit of GSAP for animation, and I worked on more than 5 projects; some were big and a few were small."
    },
    {
        heading: "¬ Video Sharing App With Ms-Azure",
        details: "Well, it was my master's sem 1 project for the Scalable Advanced Software Solution subject. In addition, in this project I made the video-sharing app look like TikTok, and in the backend I used MS Azure and Cosmos DB, and for videos I used blob storage and containers."
    },
    {
        heading: "¬ Big Data & Infrasture",
        details: "Well, in this project I worked with a big amount of data. Firstly, I got a big amount of data, then I cleaned this data. After that, I used Hadoop for better scalability, and I used Zeppelin to create output visualisation."
    },
    // {
    //     heading: "¬ Other Projects  ",
    //     details: ""
    // },
    {
        heading: "¬ Tour-And-Traveler ",
        details: "This was a project of a final-year student of computer science, and I made the frontend of a tour and travelling website. In addition, in the backend, I made just login and register credentials."
    },
    {
        heading: "¬ Comprehensive Care Center",
        details: "This was a client I got from my freelancing account, and I made a complete website, and in the frontend I used just HTML, CSS, and JS."
    },
    {
        heading: "¬ Spotify Clone",
        details : "Spotify Clone was my final year project for my bachelor's degree, and it was important for me for learning purposes. In the frontend, I used HTML, CSS, and JS, and in the backend, I used PHP and MySQL, and this project had some features like the creator could upload their songs and more."
    },
]

const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <h1 style={{ textAlign: "center" }}>My projects</h1>
            <Carousel style={carouselBox} arrows dotPosition="top" infinite={true} fade={true}>
                {dataCarousel.map((item, index) => (
                    <div className='caroselContanier' key={index}>
                        <h3 style={contentStyle}>{item.heading}</h3>
                        <p style={contentDetails}>{item.details}</p>
                        {/* <p style={contentDetails}>{item.p}</p> */}
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Projects;








