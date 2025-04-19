import React from 'react';
import "../style/loadingpage.css";
import bg from "../Assets/bg.jpg";
import { TypeAnimation } from 'react-type-animation';
import EmblaCarousel from './EmblaCarousel';



const Loadingpage = () => {
    return (
        <div className='LoadingPageBox' id='home'>
            <img src={bg} alt="background" />

            <div className='introBox'>
                <h1 className='name'>Pramay Nandoriya</h1>
                <TypeAnimation
                    className='intro'
                    sequence={[
                        "Hello, Everyone I am Frontend Developer."
                    ]}
                    wrapper="span"
                    speed={50}
                />
             
                {/* <EmblaCarousel /> */}
            </div>
        </div>
    );
}

export default Loadingpage;
