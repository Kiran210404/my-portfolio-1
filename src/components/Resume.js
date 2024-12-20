import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import "./Resume.css";

const Resume = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('DJltvMeZPBeiRYob0');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submission triggered");

    emailjs.sendForm('service_zyfxmvd', 'template_dskmbmc', e.target, 'DJltvMeZPBeiRYob0')
      .then((result) => {
          console.log("Email sent successfully:", result.text);
          setFormSubmitted(true);
      }, (error) => {
          console.log("Error sending email:", error.text);
      });
  };

  return (
    <section id="resume">
      <h2>Resume</h2>
      {!formSubmitted ? (
        <form id="resume-request-form" onSubmit={handleSubmit}>
          <label htmlFor="request-name">Name:</label>
          <input type="text" id="request-name" name="name" required />
          <label htmlFor="request-email">Email:</label>
          <input type="email" id="request-email" name="email" required />
          <label htmlFor="reason">Reason for Request:</label>
          <textarea
            id="reason"
            name="reason"
            rows="4"
            placeholder="Why do you need access to the resume?"
            required
          ></textarea>
          <button type="submit">Request Access</button>
        </form>
      ) : (
        <div>
          <p>Thank you for your request! You'll get the access to the resume shortly.</p>
          <a href="KIRAN MANE.pdf" download>
            <button>Download Resume</button>
          </a>
        </div>
      )}
    </section>
  );
};

export default Resume;
