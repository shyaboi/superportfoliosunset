import React, { useState, Component } from "react";
import './style.css';
import emailjs from 'emailjs-com';


export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_v9ocE0n7', e.target, 'user_Y70bCiqtATYVD9wzAQWVy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  alert('Thank you for reaching out to me! I will get back to you as soon as i can :)');

    }
    

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <div id="name">
      <	div>

      <label>Name</label>
      </	div>

      <input type="text" name="user_name" />
      </	div>
      <div id="email">
      <div>
      <label>Email</label>
      </	div>

      <input type="email" name="user_email" />
      </	div>
      <div id="message">
      <label>Message</label>
      <div>
      <textarea name="message" id="mesBox" />
      </	div>
      </	div>
      <div id="submit">
      <input type="submit" id="submitButt" style={{ textDecoration: "none" }} />
      </	div>
    </form>
  );
}