import React from 'react';
import "../style/EmblaCarousel.css";
import data from '../Api';

const EmblaCarousel = () => {



  return (


    <div className='skillBox'>
      <div className='skillWrapper'>
        <h1 className='skillTitle'>What I Do</h1>

        <div className="skillConatiner">
          {
            data.map((item) => (
              <div className='eachSkill' key={item.id}>
                <img className='imgOfskill' src={item.img} />{item.p}
              </div>
            ))
          }



        </div>

      </div>


    </div>
  );
};

export default EmblaCarousel;
