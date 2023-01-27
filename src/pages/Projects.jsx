import React from "react";

import Header from "../components/header/header";
import Project from "../components/Projects/Project";
import { projects } from "../helpers/projectsList";


const Projects = () => {
  return (
    <>
        <Header />

        <section className="projects">
            <div className="container">
                <h1 className="projects__title">Projects</h1>
                <div className="projects__content">

                    {projects.map((project, index) => {
                        return <Project 
                                    key={index}
                                    name={project.name}
                                    skills={project.skills}
                                    img={project.img}
                                    imgBig={project.imgBig}
                                    githubLink={project.githubLink}
                                    index={index}
                                />
                    })}

                </div>
            </div> {/* container  */}
        </section> {/* section */}
    </>
  );
};

export default Projects;
