import React from 'react';
import "../styles/Contact.css"


function ContactForm() {
    return (
        <section class="contact-box">
            <h1>Contact me</h1>
            <form action="https://formsubmit.co/a06558fcc3bc241b3fa6ceb3c62acd34" method="POST">
                <div class="name">
                    <label>Name </label>
                    <input type="text" name="name" required />
                </div>
                <div class="email">
                    <label>Email </label>
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