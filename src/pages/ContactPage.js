import React from 'react';
import SmilesContact from '../assets/SmilesContact.jpeg';
import './ContactPage.css';


function ContactPage() {
  return (
    <div style={{ 
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.1)), url(${SmilesContact})`, 
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "top center",
      zIndex: -1,
      position: 'absolute',
      width: '100%',
      height: '100vh',
    }}>
      <section className="get-in-touch">
        <h1 className="title">Get in touch</h1>
        <form className="contact-form row">
          <div className="form-field col x-50">
            <input id="name" className="input-text js-input" type="text" required />
            <label className="label" htmlFor="name">Name</label>
          </div>
          <div className="form-field col x-50">
            <input id="email" className="input-text js-input" type="email" required />
            <label className="label" htmlFor="email">E-mail</label>
          </div>
          <div className="form-field col x-100">
            <input id="message" className="input-text js-input" type="text" required />
            <label className="label" htmlFor="message">Message</label>
          </div>
          <div className="form-field col x-100 align-center">
            <input className="submit-btn" type="submit" value="Submit" />
          </div>
        </form>
      </section>
    </div>
  );
}

export default ContactPage;
