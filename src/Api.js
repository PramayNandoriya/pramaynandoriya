import html from "./Assets/html.png";
import css from "./Assets/css.png";
import js from "./Assets/js.png";
import react from "./Assets/react1.png";
import redux from "./Assets/redux.png";
import express from "./Assets/express.png";
import python from "./Assets/python.png";
import gsap from "./Assets/gsap.png";
import mongo from "./Assets/mongo.png";
import node from "./Assets/node.png";
import mysql from "./Assets/mysql.png";
import docker from "./Assets/docker.png";
import azure from "./Assets/azure.png";
import git from "./Assets/git.png"
import bronzer from "./Assets/bronzer.png";
import esate from "./Assets/estate.png";
import tour from "./Assets/tour.jpeg";
import bca from "./Assets/bca.jpeg";
import bronzerCerti from "./Assets/bronzerCerti.png";
import alison from "./Assets/alison.png"

const data = [
    {
        id: 1,
        img: html,
        p: "HTML"
    },
    {
        id: 2,
        img: css,
        p: "CSS"
    }, {
        id: 3,
        img: js,
        p: "JAVASCRIPT"
    }, {
        id: 4,
        img: react,
        p: "REACT.JS"
    },
    {
        id: 5,
        img: redux,
        p: "REDUX.JS"
    },
    {
        id: 6,
        img: node,
        p: "NODE.JS"
    },
    {
        id: 7,
        img: express,
        p: "EXPRESS.JS"
    },
    {
        id: 8,
        img: mongo,
        p: "MONGODB"
    },
    {
        id: 9,
        img: mysql,
        p: "MYSQL"
    },
    {
        id: 10,
        img: gsap,
        p: "GSAP"
    },
    {
        id: 11,
        img: python,
        p: "PYTHON"
    },
    {
        id: 12,
        img: docker,
        p: "DOCKER"
    },
    {
        id: 13,
        img: git,
        p: "GIT"
    },
    {
        id: 14,
        img: azure,
        p: "AZURE"
    },

]


export const projectData = [
    {
        id: 1,
        name: "BronzerInterio",
        duration: "Feb 2025 - Feb 2025",
        description:
            "Bronzer Kitchen is a beautifully crafted website that showcases elegant and modern interior design solutions. This project demonstrates my expertise in front-end development (React.js) and interactive web experiences.",
        link: "https://www.bronzerinterio.com/",
        features: [
            "🔹 Stunning Visual Design – Aesthetic and sleek UI for an immersive browsing experience.",
            "🔹 Smooth Animations & Transitions – Powered by GSAP and Framer Motion for engaging interactions.",
            "🔹 Responsive & Mobile-Friendly – Optimized for all devices, ensuring seamless usability.",
            "🔹 Showcase of Interior Design Projects – High-quality images and detailed descriptions of completed projects.",
            "🔹 Contact & Inquiry Forms – Easy-to-use forms for client engagement.",
            "🔹 Performance Optimized – Fast-loading and SEO-friendly design for a superior user experience.",
        ],
        techStack: ["React.js", "Framer Motion", "GSAP"],
        img: bronzer
    },
    {
        id: 2,
        name: "Video Sharing Web-app With Ms Azure",
        duration: "Dec 2024 - Dec 2024",
        description:
            "I built a dynamic and scalable video-sharing web application using Microsoft Azure services, ensuring seamless video uploads and user management. This project showcases my expertise in front-end development and cloud-based data storage.",
        link: "https://r-estatedemo.netlify.app/",
        features: [
            "~ Seamless Animations & Transitions – Used GSAP & Framer Motion to enhance user interaction with smooth effects.",
            "~ Visually Structured Property Listings – Displaying real estate properties in an organized, easy-to-browse format.",
            "~ Effortless Navigation – Designed an intuitive interface that ensures a hassle-free browsing experience."
        ],
        techStack: ["React.js", "Framer Motion", "Tailwind CSS"],
        img: esate
    },
    {
        id: 3,
        name: "Tour-and-Travelling",
        duration: "Mar 2022 - May 2022",
        description: "Final Year Project | MERN Stack Web Application ----- As part of my Bachelor's final year project, I developed a full-stack web application using the MERN stack, focusing on scalability, performance, and user experience.",
        link: "https://r-estatedemo.netlify.app/",
        features: [
            "~ Seamless Animations & Transitions – Used GSAP & Framer Motion to enhance user interaction with smooth effects.",
            "~ Visually Structured Property Listings – Displaying real estate properties in an organized, easy-to-browse format.",
            "~ Effortless Navigation – Designed an intuitive interface that ensures a hassle-free browsing experience."
        ],
        techStack: ["React.js", "Framer Motion", "Tailwind CSS"],
        img: tour
    },
    {
        id: 4,
        name: "Luxora-Eommerce with google Auth",
        duration: "Mar 2022 - May 2022",
        description: "Final Year Project | MERN Stack Web Application ----- As part of my Bachelor's final year project, I developed a full-stack web application using the MERN stack, focusing on scalability, performance, and user experience.",
        link: "https://r-estatedemo.netlify.app/",
        features: [
            "~ Seamless Animations & Transitions – Used GSAP & Framer Motion to enhance user interaction with smooth effects.",
            "~ Visually Structured Property Listings – Displaying real estate properties in an organized, easy-to-browse format.",
            "~ Effortless Navigation – Designed an intuitive interface that ensures a hassle-free browsing experience."
        ],
        techStack: ["React.js", "Framer Motion", "Tailwind CSS"],
        img: tour
    },
];

export const certificateData = [
    {
        id: 1,
        name: "Bachelor Of Computer Application",
        date: "2019-2022",
        CredentialId: "E19110194000110049/M/2019008793/00625",
        IssueBy: "Veer Narmad South Gujarat University (VNSGU)",
        img: bca,
    },
    {
        id: 2,
        name: "Bronzer-Intrio",
        date: "2025",
        CredentialId: "2025NP2802",
        IssueBy: "BronzerIntrio",
        img: bronzerCerti,
        link: "https://www.bronzerinterio.com/"
    },
    {
        id: 3,
        name: "Experience Letter Of YRHP Softwares",
        date: "2023",
        CredentialId: "20230714npb",
        IssueBy: "Yrhp Softwares",
        img: bronzerCerti,
        // link: "https://www.bronzerinterio.com/"
    },
    {
        id: 4,
        name: "Alison React.js",
        date: "2nd April 2025",
        CredentialId: "5474-47148074",
        IssueBy: "Yrhp Softwares",
        img: alison,
        link: "https://alison.com/certification/check/2303205128"
    },

]

export default data;
