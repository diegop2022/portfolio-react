import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link, useLocation } from "react-router-dom";
import "../styles/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://www.linkedin.com/in/diego-pe%C3%B1a-3738b0240" target="_blank" rel="noreferrer noopener"><LinkedInIcon></LinkedInIcon></a>
                <a href="https://github.com/diegop2022" target="_blank" rel="noreferrer noopener"><GitHubIcon></GitHubIcon></a>
                <Link to="/Contact"><EmailIcon></EmailIcon></Link>
            </div>
            <p>&copy; 2022 diegopenaportfolio.com</p>
        </div>
    )
}

export default Footer;