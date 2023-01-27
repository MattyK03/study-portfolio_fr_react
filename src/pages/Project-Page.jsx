import {useParams} from "react-router-dom";

import ButtonGit from "../components/buttonGit/buttonGit";
import { projects } from "../helpers/projectsList";

import "./../styles/project.css"

const ProjectPage = () => {
  const {id} = useParams();
  const project = projects[id];
  
  return (
    <section className="project">
      <div className="container">
        <div className="project__content">
          <h1 className="projects__title">{project.name}</h1>
          <a href="https://github.com/MattyK03" target="_blank" rel="noreferrer">
            <img
              className="project__img"
              src={project.imgBig}
              alt={project.name}
            />
          </a>

          <div className="project__devstack">Skills: {project.skills}</div>
        
          {project.githubLink && (
            <ButtonGit link={project.githubLink}/>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
