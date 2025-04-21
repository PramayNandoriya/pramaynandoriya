import React, { useEffect, useState } from "react";
import "../style/header.css";
import { Menu, X } from "lucide-react"; // Importing icons for hamburger menu

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false); // Close menu after clicking a link
        }
    };

    return (
        <div className={`headerBox ${scrolled ? "scrolled" : ""}`}>
            <h1>Pramay Nandoriya . _</h1>

  
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li onClick={() => scrollToSection("home")}> Home</li>
                <li onClick={() => scrollToSection("contact")}> Contact</li>
                <li onClick={() => scrollToSection("work")}>Projects</li>
                <li onClick={() => scrollToSection("expertise")}> Expertise</li>
                <li onClick={() => scrollToSection("education")}> My Education</li>
                <li onClick={() => scrollToSection("experience")}> Experience</li>
              
            </ul>

            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
    );
};

export default Header;
