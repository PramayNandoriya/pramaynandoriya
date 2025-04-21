import React, { useState, useEffect } from 'react';
import "../style/projectAndCerti.css";
import { Button, ButtonGroup, IconButton } from '@mui/joy';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { projectData, certificateData } from '../Api';
import leftIcon from "../Assets/left.png";

const ProjectAndCerti = () => {
    const [activeTab, setActiveTab] = useState("project");
    const [expandedId, setExpandedId] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    const [certiIndex, setCertiIndex] = useState(0);
    const [certiCardsToShow, setCertiCardsToShow] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            // For projects
            setCardsToShow(window.innerWidth <= 768 ? 1 : 3);

            // For certificates
            if (window.innerWidth <= 600) {
                setCertiCardsToShow(1);
            } else if (window.innerWidth <= 1025) {
                setCertiCardsToShow(2);
            } else if (window.innerWidth <= 1280) {
                setCertiCardsToShow(3);
            } else {
                setCertiCardsToShow(4);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleExpand = (id) => {
        setExpandedId(prevId => (prevId === id ? null : id));
    };

    const handlePrev = () => {
        setExpandedId(null); // Close any expanded card when navigating
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const handleNext = () => {
        setExpandedId(null); // Close any expanded card when navigating
        if (currentIndex + cardsToShow < projectData.length) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handleCertiPrev = () => {
        if (certiIndex > 0) {
            setCertiIndex(prev => prev - 1);
        }
    };

    const handleCertiNext = () => {
        if (certiIndex + certiCardsToShow < certificateData.length) {
            setCertiIndex(prev => prev + 1);
        }
    };

    return (
        <div className='portfolioBox'>
            <h1>My Portfolio</h1>
            <div className='innerPortfolio'>
                <div className='btngroup'>
                    <ButtonGroup color="neutral" orientation="horizontal" size="sm" spacing={1} variant="solid">
                        <Button onClick={() => {
                            setActiveTab("project");
                            setExpandedId(null); // Reset expanded state when switching tabs
                        }}>Projects</Button>
                        <Button onClick={() => {
                            setActiveTab("certificate");
                            setExpandedId(null); // Reset expanded state when switching tabs
                        }}>Certificates</Button>
                        <Button onClick={() => {
                            setActiveTab("publication");
                            setExpandedId(null); // Reset expanded state when switching tabs
                        }}>Publications</Button>
                    </ButtonGroup>
                </div>

                {/* Project Arrows */}
                {activeTab === "project" && (
                    <div className='btnArrows'>
                        <Button disabled={currentIndex === 0} onClick={handlePrev} style={{ width: "60px" }}>
                            <img className="leftIcon" src={leftIcon} alt="left" />
                        </Button>
                        <Button disabled={currentIndex + cardsToShow >= projectData.length} onClick={handleNext} style={{ width: "60px" }}>
                            <img className="rightIcon" src={leftIcon} alt="right" style={{ transform: "rotate(180deg)" }} />
                        </Button>
                    </div>
                )}

                {/* Certificate Arrows */}
                {activeTab === "certificate" && (
                    <div className='btnArrows'>
                        <Button disabled={certiIndex === 0} onClick={handleCertiPrev} style={{ width: "60px" }}>
                            <img className="leftIcon" src={leftIcon} alt="left" />
                        </Button>
                        <Button
                            disabled={certiIndex + certiCardsToShow >= certificateData.length}
                            onClick={handleCertiNext}
                            style={{ width: "60px" }}
                        >
                            <img className="rightIcon" src={leftIcon} alt="right" style={{ transform: "rotate(180deg)" }} />
                        </Button>
                    </div>
                )}

                {/* Render Projects */}
                <div className='portfolio'>
                    {activeTab === "project" && (
                        <>
                            {projectData.slice(currentIndex, currentIndex + cardsToShow).map((item) => (
                                <Card className="cards" variant="" sx={{ width: 320, mb: 3 }} key={item.id}>
                                    <CardOverflow>
                                        <AspectRatio ratio="2">
                                            <img src={item.img} loading="lazy" alt="" style={{ opacity: "1" }} />
                                        </AspectRatio>
                                    </CardOverflow>
                                    <CardContent sx={{ bgcolor: "white" }}>
                                        <Typography level="title-md" sx={{ bgcolor: 'white', fontSize: "1.6rem" }}>
                                            {item.name}
                                        </Typography>
                                        <a className='websites' href={item.link}>Visit : {item.link}</a>
                                        <Typography level="body-sm" sx={{ bgcolor: 'white' }}>
                                            {item.description}
                                        </Typography>
                                        <div style={{ display: 'flex', alignItems: 'center', marginTop: "10px", background: "white" }}>
                                            <Typography level="body-md" sx={{ color: 'black', fontWeight: 600, background: "white" }}>
                                                More Details :
                                            </Typography>
                                            <IconButton 
                                                onClick={() => toggleExpand(item.id)} 
                                                size="sm"
                                                aria-label={expandedId === item.id ? "Collapse details" : "Expand details"}
                                            >
                                                {expandedId === item.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                            </IconButton>
                                        </div>

                                        {expandedId === item.id && (
                                            <ul style={{ display: "flex", flexDirection: "column", marginTop: "5px" }}>
                                                {item.features.map((feature, i) => (
                                                    <li style={{ color: "black", fontSize: "1rem" }} key={i}>{feature}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </CardContent>
                                    <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                                        <Divider inset="context" />
                                    </CardOverflow>
                                </Card>
                            ))}
                        </>
                    )}
                </div>

                {/* Render Certificates */}
                {activeTab === "certificate" && (
                    <div className='certificateSection'>
                        {certificateData.slice(certiIndex, certiIndex + certiCardsToShow).map((certi) => (
                            <div className="container" key={certi.id}>
                                <div className="wrapper">
                                    <div className="banner-image">
                                        <img className="cartiOfImg" src={certi.img} alt={certi.name} />
                                    </div>
                                    <div className='certiDetails'>
                                        <p className='pCerti'><span className='spanCerti'>Name:</span><br />{certi.name}</p>
                                        <p className='pCerti'><span className='spanCerti'>IssueBy:</span><br />{certi.IssueBy}</p>
                                        <p className='spanCerticred'><span className='spanCerti'>CredentialId:</span><br />{certi.CredentialId}</p>
                                        <p className='pCerti'><span className='spanCerti'>Year:</span><br />{certi.date}</p>
                                        {certi.link && (
                                            <a href={certi.link} className='spanCerticred'>
                                                <span className='spanCerti'>Visit:</span><br />{certi.link}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Render Publications */}
                {activeTab === "publication" && <div>Upload Soon</div>}
            </div>
        </div>
    );
};

export default ProjectAndCerti;