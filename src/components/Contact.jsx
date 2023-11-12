import React from 'react';
import '../styles/Contact.css'; // Import the CSS file

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>If you have any questions or concerns, feel free to reach out to us:</p>
        <p>Email: info@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Example Street, Cityville, ST 12345</p>
      </div>
      <div className="contact-form">
        <h2>Send us a message</h2>
        {/* Include your contact form here */}
        <form>
          {/* Your form fields go here */}
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
