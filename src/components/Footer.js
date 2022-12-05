import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://www.linkedin.com/in/diego-pena-3738b0240/"><LinkedInIcon></LinkedInIcon></a>
                <a href="https://github.com/diegop2022"><GitHubIcon></GitHubIcon></a>
                <a href="mailto:diegopena2022@gmail.com"><EmailIcon></EmailIcon></a>
            </div>
            <p>&copy; 2022 diegopenaportfolio.com</p>
        </div>
    )
}

export default Footer;