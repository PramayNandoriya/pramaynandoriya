import React from 'react';
import "../style/work.css"
import video from "../Assets/video.webm"
import Projects from './projects';
import cv from "../Assets/N.p.pdf"

const Work = () => {
    return (
        <div id='work'>
            <div className='workBox'>
                <div className='workContainer'>
                    <h2 className='workheading'>My <br />Work</h2>
                    <p className='detailsWork'>Treat a look at my projects with love and precision in dynamic web applications and creative software solutions; each has my full attention in providing extraordinary user experiences. Whether front-end, back-end system development, or full-stack solutions, I bring ideas to life using top technologies with an eye for detail. Explore and find out how my work shines in transforming a vision into tangible reality.</p>
                    <div className='btnDownload'>
                    <a href={cv} download>
                        <button className='downloadBtn'>Download My Cv </button>
                    </a>
                    </div>
                </div>
                <div className='animationBox'>
                    <video className='video' autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className='projects'>
                <Projects />
            </div>

        </div>

    );
}

export default Work;
