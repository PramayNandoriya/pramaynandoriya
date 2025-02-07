import React from 'react';
import "../style/work.css"
import video from "../Assets/video.webm"
import Button from '@mui/material/Button';
import rightArrow from "../Assets/right.gif"

const Work = () => {
    return (
        <div className='workBox' id='work'>
            <div className='workContainer'>
                <h2 className='workheading'>My <br />Work</h2>
                <p className='detailsWork'>Treat a look at my projects with love and precision in dynamic web applications and creative software solutions; each has my full attention in providing extraordinary user experiences. Whether front-end, back-end system development, or full-stack solutions, I bring ideas to life using top technologies with an eye for detail. Explore and find out how my work shines in transforming a vision into tangible reality.</p>
            </div>
            <div className='animationBox'>

                <video className='video' autoPlay loop muted>
                    <source  src={video} type="video/mp4" />                    
                </video>
                <img className='rightArrow' src={rightArrow}></img>
                <div className="bottomSection">

                <h3>My Projects</h3><br></br>
                <Button variant="contained">click Here..</Button>
                </div>
               
            </div>
        </div>
    );
}

export default Work;
