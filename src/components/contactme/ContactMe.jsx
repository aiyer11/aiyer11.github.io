import React from "react";
import {useState} from 'react';
import emailjs from '@emailjs/browser';
import './contactme.css'

const ContactMe = () => {

    const [isSubmitting,setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();

        emailjs.sendForm('service_svu0bjm','template_vntx7mw',e.target,'-WTcB5w8p5vo3Hqtv'

        ).then(
            (result) => {
                setStateMessage('Message sent!');
                setIsSubmitting(false);
                setTimeout(() => {
                    setStateMessage(null);
                }, 5000)
            }
        );

        e.target.reset();
    };

    return(
        <section id='contactme'>
            <h2>Contact Me</h2>
            <div className="container contactme_container">
                <form onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Full Name" required></input>
                    <input type="email" name="email" placeholder="Email" required></input>
                    <textarea name="message" rows="7" placeholder="Message" required></textarea>
                    <button type = "submit" className="btn btn-primary" disabled={isSubmitting}>Send Message</button>
                    {stateMessage && <p>{stateMessage}</p>}
                </form>
            </div>
        </section>
    )
}

export default ContactMe;