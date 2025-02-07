import React from 'react';
import "../style/contact.css";
import contact from "../Assets/contact.svg"

const Contact = () => {
    return (
        <div className='contactBox' id='contact'>
            <h2 className='headingContact'> Contact Me</h2>
            <p className='emailId'>¬ pramay2822n@gmail.com </p>
            <p className='phonenumber'>   <br /> +44 7771053606 (U.k Enqiries) <br /> +91 7211119498(Whatsapp only)
            </p>
            <div className='conatctDetails'>

                <a href="https://github.com/PramayNandoriya">¬ GitHub</a>
                <a href="https://www.linkedin.com/in/pramay-nandoriya-ba429122b/">¬ Linkdin</a>
                <a href="https://www.instagram.com/i_m_pramay___/">¬ Instagram</a>
                
            </div>
        

        </div>

    );
}

export default Contact;
