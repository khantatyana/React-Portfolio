import React from "react";
import "./style.css";
// import laptop from "../../Images/laptopred.jpg";
const imgStyle = {
    // "&:hover": {
    //     webkitTransform: "scaleX(-1)",
    //     transform: "scaleX(-1)",
    // }
    width: "171px",
    height: "180px"
};

function About() {

    return (
        <div>
            <h1>About me</h1>
            <img 
            style={imgStyle}
            alt="171x180"
            // src={laptop}
            src="/laptopred.jpg"
            />
            <article><h5>"Everything you can imagine is real."<br />- Pablo Picasso</h5>
            </article>
            <br /><br />
            <p>I am a Full-Stack Web Developer leveraging background in Economics & Management to build more intuitive user experiences on the web. Earned a certificate in Full Stack Flex (JavaScript) Development through Columbia Engineering where I developed skills in JavaScript - MERN - MongoDB / Express / React / Node - Jest JS / ES6 / jQuery, MySQL, PWA and responsive web design. Known as an innovative problem-solver passionate about developing apps, with a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an impactful user-experience. I applied aspects of UX and agile development in a recent project where I worked in a team of five to develop an app - day trip planner that linked to the 400+ National Parks (based on NPS API) with a user-friendly interface. I’m excited to leverage my skills in the future as part of a fast-paced, quality-driven team in order to build better experiences on the web.</p>
        </div>
    );
}

export default About;