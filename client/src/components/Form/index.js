import React, { Component} from "react";
import emailjs from 'emailjs-com';
import Axios from "axios";
require('dotenv').config();

export function ContactUs() {
  console.log(process.env);

  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target.user_email.value);
    Axios.post("http://localhost:3001/sendEmail", {
      user_name: e.target.user_name.value,
      user_email: e.target.user_email.value,
      message: e.target.message.value
    })
    // .then(() => {
    //   e.target.reset();
    // })
    
    // emailjs
    //   .sendForm("my_amazing_template", process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
    //   .then((result) => {
    //       console.log(result.text);
    //       alert("Your message was sent");
    //   }, (error) => {
    //       console.log(error.text);
    //       console.log(process.env);
    //   });
    // e.target.reset();
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