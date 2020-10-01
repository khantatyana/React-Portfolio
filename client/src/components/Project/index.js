import React, { useState, useEffect, Categorie } from "react";
import ReactDOM from "react-dom";
import API from "../../utils/API";
import { Container } from "../Grid";
import "./style.css";


function Projects() {

    const [projects, setProjects] = useState([{}]);
    // const [isShown, setIsShown] = useState(false);

    // constructor(() => {
    //     super();
    //     this.state({categorie: "oldClass"});
    // })
    
    // addClassName(() => {
    //     this.setState({categorie: "newClass"});
    //     console.log(this.state.categorie);
    // })

    useEffect(() => {
        loadProjects()
    }, [])

    function loadProjects() {
        API.getProjects()
            .then(res =>
                // console.log(res.data)
                setProjects(res.data)
            )
            .catch(err => console.log(err));
    };

    return (
        <Container fluid container container-fluid content-wrapper>
            {projects.length ? (
                <div className="portfolio-items-wrapper">
                    {projects.map(( project) => (

                        <div 
                        key={project._id} 
                        className="portfolio-item-wrapper 
                        // {this.state.catigorie} onMouseEnter={this.addClassName.bind(this)}
                        "
                        // onMouseEnter={() => setIsShown(true)}
                        // onMouseLeave={() => setIsShown(false)}
                        > 
                        {/* {isShown && (className="img-darken")} */}
                            <div className="portfolio-img-background" style={{ backgroundImage: `url(${project.portfolioImgBackground})` }}>
                                <div className="img-text-wrapper">
                                    <div className="logo-wrapper">
                                        <a href={project.deployed} target="_blank">
                                            <img src={project.logoWrapper} alt="img" />
                                            {/* <img src={require(`${project.logoWrapper}`)} alt="img" /> */}
                                            <br />
                                            <i className="subtitle fab fa-connectdevelop fa-spin-hover">Deployed</i>
                                        </a>
                                    </div>
                                    <div className="subtitle">
                                        {project.title}
                                    </div>
                                    <a href={project.gitHub} target="_blank">
                                        <i className="subtitle fab fa-github fa-lg fa-spin-hover">Github</i>
                                    </a>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            ) : (
                    <h3>No Results to Display</h3>
                )}

        </Container>
    );
}

export default Projects;