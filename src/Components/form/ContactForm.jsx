import { useState } from "react";

export default function ContactForm() {
    const [result, setResult] = useState("");

    const sendEmail = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully ✅");
            event.target.reset();
        } else {
            setResult("Something went wrong ❌");
        }
    };

    return (
        <form onSubmit={sendEmail} className="contact-right">

            <label htmlFor="name">Your Name</label>
            <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                required
            />

            <label htmlFor="email">Your Email</label>
            <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
            />

            <label htmlFor="message">Write your message here</label>
            <textarea
                name="message"
                rows="8"
                placeholder="Write your message here"
                required
            ></textarea>

            <button type="submit" className="contact-submit">
                Submit now
            </button>

            <span className="contact-result">{result}</span>

        </form>
    );
}