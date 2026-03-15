import theme_pattern from "../../assets/theme_pattern.svg"
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import ContactForm from "../form/ContactForm";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const userId = import.meta.env.VITE_USER_ID;

    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.log(error.text);
        alert("Failed to send message.");
      });
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let&apos;s talk</h1>
          <p>
            “Interested in working together? Feel free to get in touch — I’m always open to discussing new projects and opportunities.”
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <FontAwesomeIcon className="mail-icon" icon={faEnvelope} />
              <a href="mailto:teklemya@mail.uc.edu">
                <p>pramay2822n@gmail.com</p>
              </a>
            </div>
            <div className="contact-detail">
              {/* <img src={call_icon} alt="Call" /> */}
              <FontAwesomeIcon className="call-icon" icon={faPhone} />
              <a href="tel:+15135000630">
                <p>+44 7771053606</p>
              </a>
            </div>
            <div className="contact-detail">
              {/* <img src={location_icon} alt="Location" /> */}
              <FontAwesomeIcon className="location-icon" icon={faLocationDot} />
              <a href="https://www.google.com/maps?q=Cincinnati,+Ohio" target="_blank" rel="noopener noreferrer">
                <p>Birmingham- Uk</p>
              </a>
            </div>
          </div>
        </div>
      
        <ContactForm/>

      </div>
      <div className="contact-bottom">
        <h1>
          “In this world, there is nothing so purifying as knowledge.” — Bhagavad Gita 4:38
        </h1>
      </div>
    </div>
  )
}

export default Contact
