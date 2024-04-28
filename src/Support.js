import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Support.css'; // Import the CSS styles from a separate file

function Support() {
    // State to manage the mobile navigation menu
    const [isNavActive, setIsNavActive] = useState(false);

    // Function to toggle the navigation menu
    const toggleMenu = () => {
        setIsNavActive(!isNavActive);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
    };

    return (
        <div>
            {/* Header */}
            <header>
                <a href="home.html">
                    <img src="Car-Ride (1).png" alt="CabRide Logo" style={{ height: '40px' }} />
                </a>
                <nav id="navbar">
          <Link to="/">Home</Link>
          <Link to="/drive">
            Drive
          </Link>
          <Link to="/select">
            Select
          </Link>
          <Link to="/offers">Offers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/support">Support</Link>
          <Link to="/About">About</Link>
        </nav>
                <span id="menu-bars" className="fas fa-bars" onClick={toggleMenu}></span>
            </header>

            {/* Content Section */}
            <div className="content-section">
                <h1 class="headline">Customer Support</h1>
                <p>Welcome to CabRide's support page. We're here to assist you with any questions or concerns you may have. Explore the sections below for help, or contact us directly using the form provided.</p>

                {/* Support Options Section */}
                <div className="support-container">
                    {[
                        {
                            title: 'Frequently Asked Questions',
                            description: 'Find answers to common queries about our services and policies.',
                            linkText: 'Read FAQs',
                            linkHref: '#'
                        },
                        {
                            title: 'Billing & Payments',
                            description: 'Information on billing methods, accepted payment options, and resolving payment issues.',
                            linkText: 'Learn More',
                            linkHref: '#'
                        },
                        {
                            title: 'Booking Assistance',
                            description: 'Get tips and support for booking rides and managing your bookings.',
                            linkText: 'Get Assistance',
                            linkHref: '#'
                        },
                        {
                            title: 'Service & Safety',
                            description: 'Read about our service standards and safety measures.',
                            linkText: 'Learn More',
                            linkHref: '#'
                        }
                    ].map((item, index) => (
                        <div key={index} className="support-box">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <a href={item.linkHref}>{item.linkText}</a>
                        </div>
                    ))}
                </div>

                {/* Contact Form Section */}
                <div className="contact-form">
                    <h2>Contact Us</h2>
                    <p>If you need further assistance, please fill out the form below to get in touch with our support team:</p>

                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" rows="5" required />
                        <button type="submit">Send Message</button>
                    </form>
                </div>

                {/* FAQ Section */}
                <div className="faq-section">
                    <h2>FAQs</h2>

                    {[
                        {
                            title: 'How can I book a ride?',
                            text: 'Booking a ride is easy. Use our app or website to enter your pick-up and drop-off locations, then select your preferred vehicle type and confirm your booking.'
                        },
                        {
                            title: 'What payment methods are accepted?',
                            text: 'We accept major credit cards, debit cards, and popular online payment methods. You can choose your preferred method during checkout.'
                        },
                        {
                            title: 'How can I contact customer support?',
                            text: 'You can contact our support team via the contact form on this page or use the live chat option for real-time assistance.'
                        },
                        {
                            title: 'What safety measures are in place?',
                            text: 'We prioritize your safety with background checks for drivers, sanitization protocols, and a rating system for both drivers and passengers.'
                        }
                    ].map((faq, index) => (
                        <div key={index} className="faq-item">
                            <h3>{faq.title}</h3>
                            <p>{faq.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Support;
