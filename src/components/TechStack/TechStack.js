import React from "react";
import "./TechStack.css";
import cpp from "../../images/techStack/cpp.png";
import firebase from "../../images/techStack/firebase.png";
import github from "../../images/techStack/github.png";
import html from "../../images/techStack/html.png";
import js from "../../images/techStack/js.png";
import react from "../../images/techStack/react.png";
import TechStackIconContainer from "./TechStackIconContainer/TechStackIconContainer";

function TechStack() {
  const techstackData = [
    {
      iconName: "React",
      iconImage: react,
      iconAltPropery: "reactImage",
    },
    {
      iconName: "Javascript",
      iconImage: js,
      iconAltPropery: "jsImage",
    },
    {
      iconName: "HTML",
      iconImage: html,
      iconAltPropery: "htmlImage",
    },
  ];

  const techstackData2 = [
    {
      iconName: "C++",
      iconImage: cpp,
      iconAltPropery: "cppImage",
    },
    {
      iconName: "Github",
      iconImage: github,
      iconAltPropery: "githubImage",
    },
    {
      iconName: "Firebase",
      iconImage: firebase,
      iconAltPropery: "firebaseImage",
    },
  ];

  return (
    <div className="techstack_container">
      <p className="techstack_title">Tech Stack</p>
      <div className="techstack_icon_container">
        {techstackData.map((value, key) => {
          return (
            <TechStackIconContainer
              image={value.iconImage}
              altProperty={value.iconAltPropery}
              name={value.iconName}
            />
          );
        })}
      </div>
      <div className="techstack_icon_container">
        {techstackData2.map((value, key) => (
          <TechStackIconContainer 
            image={value.iconImage}
            altProperty={value.iconAltPropery}
            name={value.iconName}
          />
        ))}
      </div>
    </div>
  );
}

export default TechStack;
