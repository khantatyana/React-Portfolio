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
            <p>Hello there, my name is Tatyana. I am a Web Developer. Known as an innovative problem-solver passionate about developing apps, with a focus on mobile-first design and creativeness. Earned a certificate in Full Stack Flex from Columbia Engineering, where I developed skills in JavaScript - MERN ( MongoDB / Express / React / Node ) OOP, PWA, TDD and responsive web design. Pursuing my master's of Computer Science at Stevens Institute of Technology. With each project, my aim is to best engage my audience for an impactful user-experience applying aspects of UX and agile methodology. I’m excited to leverage my skills in the future as part of a fast-paced, quality-driven team in order to build better experiences on the web.</p>
        </div>
    );
}

export default About;