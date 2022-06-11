import React from "react";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import cpp from "../../images/techStack/cpp.png";
import firebase from "../../images/techStack/firebase.png";
import github from "../../images/techStack/github.png";
import html from "../../images/techStack/html.png";
import js from "../../images/techStack/js.png";
import react from "../../images/techStack/react.png";

function Experience() {
  const statements = [
    "1. I am a great sde kodkskdskodksokd osko skokd okdo sd s sde kodkskdskodksokd osko skokd okdo sd s",
    "2. I have worked upon various features sde kodkskdskodksokd osko skokd okdo sd s sde kodkskdskodksokd osko skokd okdo sd s",
    "3. jidjsijdiidsmikdsmdksm sde kodkskdskodksokd osko skokd okdo sd s sde kodkskdskodksokd osko skokd okdo sd s",
    "4. daiosjdiasmodsmajdasojdaso sde kodkskdskodksokd osko skokd okdo sd s sde kodkskdskodksokd osko skokd okdo sd s",
    "5. dioasjiodjaiojddoiams sde kodkskdskodksokd osko skokd okdo sd s sde kodkskdskodksokd osko skokd okdo sd s",
  ];
  const iconImages = [react, js, html, firebase];

  return (
    <div className="experience_container">
      <p className="experience_title">Experience</p>
      <div className="experience_cards_container">
        <ExperienceCard
          companyName="Lakshmi Chitfund Pvt Ltd"
          designation="SDE"
          statements={statements}
          iconImages={iconImages}
        />
        <ExperienceCard
          companyName="Lakshmi Chitfund Pvt Ltd"
          designation="SDE"
          statements={statements}
          iconImages={iconImages}
        />
        <ExperienceCard
          companyName="Lakshmi Chitfund Pvt Ltd"
          designation="SDE"
          statements={statements}
          iconImages={iconImages}
        />
      </div>
    </div>
  );
}

export default Experience;
