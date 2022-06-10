import React from "react";
import "./TechStackIconContainer.css";

function TechStackIconContainer({ name, image, altProperty }) {
  return (
    <div className="techstack_icons">
      <img src={image} alt={altProperty} />
      <p>{name}</p>
    </div>
  );
}

export default TechStackIconContainer;
