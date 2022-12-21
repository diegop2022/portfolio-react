import React from 'react';
import "../styles/Contact.css"
import CallMadeIcon from '@mui/icons-material/CallMade';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

function ContactForm() {
    return (
        <section class="contact-box">
            <h1 class="heading">Contact me</h1>
            <form action="https://formsubmit.co/a06558fcc3bc241b3fa6ceb3c62acd34" method="POST">
                <div class="name">
                    <h1>Name<PersonIcon /></h1>
                    <input type="text" name="name" required />
                </div>
                <div class="email">
                    <h1>Email<EmailIcon /></h1>
                    <input type="email" name="email" required />
                </div>
                <div class="message">
                    <textarea name="message" placeholder="message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    )
}

export default ContactForm;