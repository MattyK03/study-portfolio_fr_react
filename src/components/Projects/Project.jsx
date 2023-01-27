import "./project.css";

import { NavLink } from "react-router-dom";

const Project = (props) => {
    return (

        <div className="projects__item">
          <NavLink to={`/project-page/${props.index}`} className="project__link">
            <img 
              className="projects__img" 
              src={props.img}
              alt={props.name} />
            <div className="projects__name">{props.name}</div>
          </NavLink>
        </div>

    );
}
 
export default Project;