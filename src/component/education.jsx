import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../style/education.css";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const eduRef = useRef(null);
    const stepsRef = useRef([]);

    useEffect(() => {
        const eduSection = eduRef.current;
        const steps = stepsRef.current;

        // Fade-in effect for the entire education section
        gsap.fromTo(
            eduSection,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: eduSection,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Fade-in effect for each step
        steps.forEach((step, index) => {
            gsap.fromTo(
                step,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: index * 0.3,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: step,
                        start: "top 90%",
                        end: "top 20%",
                        toggleActions: "play none none reverse", // Reverses when scrolling up
                    },
                }
            );
        });
    }, []);

    return (
        <div className="eduBox" ref={eduRef} id="education">
            <h2>My Education</h2>
            <div className="stepper">
                <div className="step" ref={(el) => (stepsRef.current[0] = el)}>
                    <div className="circle">1</div>
                    <div className="content">
                        <div className="label">Bachelor of Computer Applications (B.C.A)</div>
                        <div className="details">
                            I earned a first-class bachelor's degree in 2019–2022, and during that time, I learned a lot of skills, including 
                            the fundamentals of web development, DSA, algorithms, databases, and user interface development. At the end of the 
                            program, I created a master's project and seminar, and my project was a Spotify clone. I used PHP and MySQL for the 
                            backend and HTML, CSS, and JS for the front end.
                        </div>
                    </div>
                </div>

                <div className="line"></div>

                <div className="step" ref={(el) => (stepsRef.current[1] = el)}>
                    <div className="circleTwo">2</div>
                    <div className="content">
                        <div className="label">MSc Computer Science And Technology</div>
                        <div className="details">
                            I completed an MSc in Computer Science and Technology at Ulster University's campus in Birmingham in 2024–2025. 
                            Studying databases like MongoDB, CosmosDB, SQL, and NoSQL, as well as MS Azure, big data, machine learning, 
                            and data science, was very beneficial to my career.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
