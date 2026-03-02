import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

    return (
        <div className="contact-page">
            <div className="contact__container">
                <div className="contact__info">
                    <h1 className="contact__headline">Get In Touch</h1>
                    <p className="contact__sub">Have a question about our blends, wholesale, or gifting? We'd love to hear from you.</p>

                    <div className="contact__details">
                        <div className="contact-detail">
                            <div className="contact-detail__icon">📍</div>
                            <div><h4>Visit Us</h4><p>82 Long Street, Cape Town, 8001</p></div>
                        </div>
                        <div className="contact-detail">
                            <div className="contact-detail__icon">✉️</div>
                            <div><h4>Email</h4><p>hello@lunetea.co.za</p></div>
                        </div>
                        <div className="contact-detail">
                            <div className="contact-detail__icon">📞</div>
                            <div><h4>Phone</h4><p>+27 21 123 4567</p></div>
                        </div>
                        <div className="contact-detail">
                            <div className="contact-detail__icon">🕐</div>
                            <div><h4>Hours</h4><p>Mon – Fri: 9am – 5pm</p></div>
                        </div>
                    </div>
                </div>

                <div className="contact__form-wrap">
                    {sent ? (
                        <div className="contact__success">
                            <div className="success-icon">✓</div>
                            <h3>Message Sent</h3>
                            <p>We'll get back to you within 24 hours.</p>
                        </div>
                    ) : (
                        <form className="contact__form" onSubmit={handleSubmit}>
                            <h3 className="form-section-title">Send a Message</h3>
                            <div className="form-row">
                                <div className="form-group"><label>Name</label><input type="text" required placeholder="Your name" /></div>
                                <div className="form-group"><label>Email</label><input type="email" required placeholder="you@example.com" /></div>
                            </div>
                            <div className="form-group"><label>Subject</label>
                                <select>
                                    <option>General Enquiry</option><option>Wholesale</option><option>Gift Orders</option><option>Other</option>
                                </select>
                            </div>
                            <div className="form-group"><label>Message</label><textarea rows="5" required placeholder="How can we help?" /></div>
                            <button type="submit" className="btn btn--primary contact__submit">Send Message</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Contact;
