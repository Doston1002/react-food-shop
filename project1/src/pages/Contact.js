import React from "react";
import "../styles/Contact.css";
import ContactImage from "../assets/fooda.jpeg";
function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactImage})` }}
      ></div>
      <div className="rightSide">
        <h1> contact Us</h1>
        <form id="contact-form">
          <label htmlFor="name">Full Name</label>
          <input name="name" type="text" placeholder="Enter your Name" />
          <label htmlFor="email">Email </label>
          <input
            name="name"
            type="text"
            placeholder="Enter email address"
            type="email"
          />
          <label htmlFor="sessage">Message </label>
          <textarea
            name="message"
            placeholder="Enter your message"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
