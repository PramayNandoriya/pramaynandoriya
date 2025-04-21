import React from 'react';
import "../style/contact.css";
import { toast } from 'react-toastify';

const Contact = () => {
    const [result, setResult] = React.useState("");


    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "ea11520d-b800-465c-9d76-dcc49b625288");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Form Submitted Successfully")
            setResult("");
            event.target.reset();
        } else {
            toast.error(data.message)
            console.log("Error", data);
            setResult("");
        }
    };

    return (
        <>
            <form className="contact-container" id='contact' onSubmit={onSubmit}>
                {/* Left Side */}
                <div className="contact-left">
                    <h1 className="contact-title">About Me.</h1>
                    <p>Hi, I'm Pramay Nandoriya, a passionate Front-End Developer specializing in React.js with over 1 year of hands-on experience. I hold a Bachelor’s degree in Computer Science and am currently pursuing my Master’s in Computer Science to deepen my knowledge and stay ahead in the tech world. </p>
                    <p>I enjoy building clean, responsive, and user-friendly web interfaces. I’ve worked with a few companies and contributed to several projects, which you can explore in the Projects section.</p>
                 <p>
                        <strong>Email:</strong> <a href="mailto:pramay2822n@gmail.com">pramay2822n@gmail.com</a>
                    </p>
                    <p>
                        <strong>Phone:</strong> +44 7771053606
                    </p>
                    <div className='socialLinks'>
                        <a href="https://github.com/PramayNandoriya">¬ GitHub</a>
                        <a href="https://www.linkedin.com/in/pramay-nandoriya-ba429122b/">¬ Linkdin</a>
                        <a href="https://www.instagram.com/i_m_pramay___/">¬ Instagram</a>
                    </div>
                </div>

                {/* Right Side */}
                <div className="contact-right">
                <h1 className="contact-title">Contact Me</h1>
                    <div className="form-row">
                        <input type="text" name="first_name" placeholder="First Name *" required />
                        <input type="text" name="last_name" placeholder="Last Name *" required />
                    </div>
                    <div className="form-row">
                        <input type="email" name="email" placeholder="Email *" required />
                        <input type="tel" name="phone" placeholder="Phone" />
                    </div>
                    <textarea name="message" placeholder="Leave us a message..." required></textarea>
                    <button  className="submitBtn" type="submit">Submit</button>
                    <p>{result}</p>
                </div>
            </form>
        </>

    );
}

export default Contact;
