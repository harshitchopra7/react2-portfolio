import React from "react";
import "./Homepage.css";
import githubIcon from "../../images/githubIcon.png";
import linkedinIcon from "../../images/linkedinIcon.png";

function Homepage() {
    return (
        <div className="homepage_container">
            <div className="homepage_left">
                <p className="homepage_left_h1"><span className="red_color">Hi,</span> my name is</p>
                <p className="homepage_left_h2">Harshit Chopra</p>
                <p className="homepage_left_h3">SDE at <span className="red_color">Somewhere</span></p>
                <p className="homepage_left_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div>
                    <a href="https://github.com/harshitchopra7" target="_blank">
                        <img src={githubIcon} alt="githubimage" />
                    </a>
                    <a href="https://www.linkedin.com/in/harshit-chopra-b98a94189/" target="_blank">
                        <img src={linkedinIcon} alt="linkedinimage" />
                    </a>
                </div>
                <a href="mailto:harshit1@gmail.com">
                    <button className="homepage_left_button">Get in Touch</button>
                </a>
            </div>
            <div className="homepage_right">
                <img src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif" alt="GIF" />
            </div>
        </div>
    )
}

export default Homepage
