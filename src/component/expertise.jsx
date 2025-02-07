import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../style/expertise.css";
import recatIcon from "../Assets/demo.png";
import tech from "../Assets/tech.png";

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
    const expertiseRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const expertiseSection = expertiseRef.current;
        const cards = cardsRef.current;

        gsap.fromTo(
            expertiseSection,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: expertiseSection,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { x: 200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    delay: index * 0.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        end: "top 10%", // Keeps animation active while scrolling
                        toggleActions: "play none none reverse", // Reverse when scrolling up
                    },
                }
            );
        });
    }, []);

    return (
        <div className="expertiseBox" ref={expertiseRef} id='expertise'>
            <h2>My Expertise</h2>

            <div className="myExpertiseContainer">
                <div className="card" ref={(el) => (cardsRef.current[0] = el)}>
                    <div>
                        <img src={recatIcon} alt="React" />
                    </div>
                    <h3>Frontend Developer | React.js</h3>
                    <p>
                        Passionate about "Fullstack-Web-Development" and I have 1 year of development experience as a Front-End Developer. 
                        I use HTML, CSS, JS, React, and various libraries like GSAP, MUI, and MUI-Icons. Additionally, I’m learning backend 
                        technologies such as MongoDB, Express.js, CORS, Node.js, and MySQL.
                    </p>
                </div>

                <div className="card" ref={(el) => (cardsRef.current[1] = el)}>
                    <div>
                        <img src={tech} alt="Technologies" />
                    </div>
                    <h3>Technologies</h3>
                    <p>
                        I have also studied technologies like Big Data & Cloud Computing (Azure, Hadoop) and Database Management (Cosmos DB, SQL).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Expertise;
