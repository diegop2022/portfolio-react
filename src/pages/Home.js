import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link, useLocation } from "react-router-dom";
import "../styles/Home.css"

function Home() {
    return <div className="home">
        <div className="about">
            <h2>Hi, My Name is Diego</h2>
            <div className="prompt">
                <p>Full-Stack Web Developer who is avid in learning new skills and passionate in seeking new knowledge and experiences</p>
                <a href="https://www.linkedin.com/in/diego-pe%C3%B1a-3738b0240" target="_blank" rel="noreferrer noopener"><LinkedInIcon></LinkedInIcon></a>
                <a href="https://github.com/diegop2022" target="_blank" rel="noreferrer noopener"><GitHubIcon></GitHubIcon></a>
                <Link to="/Contact"><EmailIcon></EmailIcon></Link>
            </div>
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <ol className="list">
                <li className="item">
                    <h2>Front-End</h2>
                    <span>
                        HTML, CSS, React, NPM
                    </span>
                </li>
            </ol>
            <ol className="list">
                <li className="item">
                    <h2>Back-End</h2>
                    <span>
                        NodeJS, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB, SQL, NoSQL
                    </span>
                </li>
            </ol>
            <ol className="list">
                <li className="item">
                    <h2>Languages</h2>
                    <span>JavaScript, C++</span>
                </li>
            </ol>
        </div>
    </div>;
}

export default Home;