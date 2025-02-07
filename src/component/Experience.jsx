import React, { useEffect, useRef } from "react";
import "../style/experience.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const expRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            expRef.current,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: expRef.current,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1,
                },
            }
        );
    }, []);

    return (
        <div className="expBox" ref={expRef} id="experience">
            <h2>My Experience</h2>

            <div className="containerExp">
                <Accordion
                    defaultExpanded
                    sx={{ background: "#0A0A0A", width: "70%", border: "1px solid rgba(255, 255, 255, 0.3)" }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                        <Typography component="span">YRHP Softwares</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        - Web Developer<br />
                        - From 1-7-22 To 1-7-24
                        <br /><br />
                        YRHP software employed me as a front-end developer (React.js). My technical skills include HTML,
                        CSS, Redux, MUI, SCSS, Tailwind CSS, JavaScript, and React.js. I am also familiar with MongoDB,
                        Node.js, Express.js, MySQL, and Python. Later, I worked as a tester at YRHP Software.
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ background: "#0A0A0A", width: "70%", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
                        <Typography component="span">Amazon Logistics</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        ¬ Warehouse Operative<br />
                        ¬ From 09/09/24 To 04/01/25 <br /><br />
                        I worked as a warehouse operative at Amazon Logistics, with duties including stowing, picking,
                        stock management, and problem-solving.
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default Experience;
