import React from "react";
import "./style.css";

function Contact() {

    return (
        <div className="main">
            <div className="col-lg-3">
                <div className="social-icons">
                    <div className="col-md-6 col-xs">
                        <a className="social-link" href="https://github.com/khantatyana" target="_blank"><i class="fab fa-github fa-4x fa-spin-hover"></i></a>
                    </div>
                    <div className='col-md-6 col-xs'>
                        <a className="social-link" href="https://linkedin.com/in/khan-tatyana-b312434a" target="_blank"><i class="fab fa-linkedin-in fa-4x fa-spin-hover"></i></a>
                    </div>
                    <div className="col-md-6 col-xs">
                        <a className="social-link" href="https://www.facebook.com/tatyana.khan.5" target="_blank"><i class="fab fa-facebook fa-4x fa-spin-hover"></i></a>
                    </div>
                    <div className="col-md-6 col-xs">
                        <a className="social-link" href="https://instagram.com/hantanya" target="_blank"><i class="fab fa-instagram fa-4x fa-spin-hover"></i></a>
                    </div>
                    <div className="col-md-6 col-xs">
                        <a className="social-link" href="https://docs.google.com/document/d/1ik0Hxwrf0mZ6OQFYRgUocj9wheIWVkhSzQOjPzo4EUs/edit?usp=sharing" target="_blank"><i class="far fa-file-word fa-4x fa-spin-hover"></i>Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;