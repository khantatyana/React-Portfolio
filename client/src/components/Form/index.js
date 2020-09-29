import React from "react";
import emailjs from 'emailjs-com';
// import apiKeys from '../../js/apikeys'
require("dotenv").config();
// require("dotenv").config(process.env.REACT_APP_PRODUCTION);

export function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('my_amazing_template', process.env.REACT_APP_PRODUCTION.TEMPLATE_ID, e.target, process.env.REACT_APP_PRODUCTION.USER_ID)
      // .sendForm('my_amazing_template', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
      .then((result) => {
          console.log(result.text);
          alert("Your message was sent");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <form className="contact-form form" onSubmit={sendEmail}>
      <input className="form-control" type="hidden" name="contact_number" />
      <label>Name</label>
      <div className="form-group form__input">
        <input className="form-control" type="text" name="user_name" placeholder="John Smith"/>
      </div>
      <label>Email</label>
      <div className="form-group form__input" >
        <input className="form-control" type="email" name="user_email" placeholder="exaple@gmail.com"/>
      </div>
      <label>Message</label>
      <div className="form-group form__input">
        <textarea className="form-control" name="message" placeholder="Enter your message"/>
      </div>
      <input className="btn btn-primary" type="submit" value="Send" rows="20"  />
    </form>
  );
}