import React from "react";
import "./style.css";

function Contact() {

    return (
        <div className="main">
            <div className="col-lg-3">
                <div className="social-icons">
                    <div className="col-md-6 col-xs">
                        <a className="social-link" href="https://github.com/khantatyana" target="_blank">
                            <i className="fab fa-github fa-4x fa-spin-hover"></i>
                        </a>
                    </div>
                    <div className='col-md-6 col-xs'>
                        <a className="social-link" href="https://www.linkedin.com/in/khan-tatyana/" target="_blank">
                            <i className="fab fa-linkedin-in fa-4x fa-spin-hover"></i>
                        </a>
                    </div>
                    <div className="col-md-6 col-xs">
                        <a className="social-link" href="https://www.facebook.com/tatyana.khan.5" target="_blank">
                            <i className="fab fa-facebook fa-4x fa-spin-hover"></i>
                        </a>
                    </div>
                    <div className="col-md-6 col-xs">
                        <a className="social-link" href="https://instagram.com/hantanya" target="_blank">
                            <i className="fab fa-instagram fa-4x fa-spin-hover"></i>
                        </a>
                    </div>
                    <div className="col-md-6 col-xs">
                        <a className="social-link" href="https://drive.google.com/file/d/1zTJWgWdiiWX9HWGWxgb5I_BV_8g8CjeQ/view?usp=sharing" target="_blank">
                            <i className="far fa-file-word fa-4x fa-spin-hover"></i>Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;