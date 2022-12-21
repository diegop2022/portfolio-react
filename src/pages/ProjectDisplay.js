import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList"
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link, useLocation } from "react-router-dom";
import Navbar from '../components/Navbar'
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    console.log(project.deploy)

    return (
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} />
            <p>
                <b>Deployed Link:</b> <a href={project.deploy} target="_blank" rel="noreferrer noopener"><GitHubIcon></GitHubIcon></a>
            </p>
            <p>
                <b>About the project:</b> {project.desc}
            </p>
            <button class="backbtn"><Link to="/Projects" class="back">Back</Link></button>
        </div >
    );
}

export default ProjectDisplay;