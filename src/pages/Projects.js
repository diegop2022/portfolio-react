import React from "react";
import ProjectItem from "../components/ProjectItem";
import Project1 from "../assets/project1.PNG";
import Project2 from "../assets/project2.PNG";
import Project3 from "../assets/project3.PNG";
import { ProjectList } from "../helpers/ProjectList"

import "../styles/Projects.css";

function Projects() {
    return <div className="projects">
        <h1>My Personal Projects</h1>
        <div className="projectList">
            {ProjectList.map((project, index) => {
                return <ProjectItem id={index} name={project.name} image={project.image} />
            })}
        </div>
    </div>;
}

export default Projects;