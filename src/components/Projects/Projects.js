import React from "react";
import ProjectBox from "./ProjectBox/ProjectBox";
import "./Projects.css";

function Projects() {
  const projectsData = [
    {
      image: "https://wallpaperaccess.com/full/1376490.jpg",
      title: "Badiya Ecommerce Website",
      sentences: [
        "odpkaiofsjn cnudnc fndj ndcsn sd csdn isdo odj dsvv oivns ofvjsoi jvfosjf jofsij ofsj oifj soj vo fdjosijciojsdiojdfojiofdsjio doioij dsofij cosj dissd fd",
        "odpkaiofsjn cnudnc fndj ndcsn sd csdn isdo odj dsvv oivns ofvjsoi jvfosjf jofsij ofsj oifj soj vo fdjosijciojsdiojdfojiofdsjio doioij dsofij cosj dissd fd",
        "odpkaiofsjn cnudnc fndj ndcsn sd csdn isdo odj dsvv oivns ofvjsoi jvfosjf jofsij ofsj oifj soj vo fdjosijciojsdiojdfojiofdsjio doioij dsofij cosj dissd fd",
        "odpkaiofsjn cnudnc fndj ndcsn sd csdn isdo odj dsvv oivns ofvjsoi jvfosjf jofsij ofsj oifj soj vo fdjosijciojsdiojdfojiofdsjio doioij dsofij cosj dissd fd",
      ],
      link: "https://google.com",
    },
    {
      image: "https://wallpaperaccess.com/full/1376490.jpg",
      title: "Badiya Ecommerce Website",
      sentences: [
        "odpkaiofsjn cnudnc fndj ndcsn sd csdn isdo odj dsvv oivns ofvjsoi jvfosjf jofsij ofsj oifj soj vo fdjosijciojsdiojdfojiofdsjio doioij dsofij cosj dissd fd",
        "odpkaiofsjn cnudnc fndj ndcsn sd csdn isdo odj dsvv oivns ofvjsoi jvfosjf jofsij ofsj oifj soj vo fdjosijciojsdiojdfojiofdsjio doioij dsofij cosj dissd fd",
        "odpkaiofsjn cnudnc fndj ndcsn sd csdn isdo odj dsvv oivns ofvjsoi jvfosjf jofsij ofsj oifj soj vo fdjosijciojsdiojdfojiofdsjio doioij dsofij cosj dissd fd",
        "odpkaiofsjn cnudnc fndj ndcsn sd csdn isdo odj dsvv oivns ofvjsoi jvfosjf jofsij ofsj oifj soj vo fdjosijciojsdiojdfojiofdsjio doioij dsofij cosj dissd fd",
      ],
      link: "https://google.com",
    },
    {
      image: "https://wallpaperaccess.com/full/1376490.jpg",
      title: "Badiya Ecommerce Website",
      sentences: [
        "odpkaiofsjn cnudnc fndj ndcsn sd csdn isdo odj dsvv oivns ofvjsoi jvfosjf jofsij ofsj oifj soj vo fdjosijciojsdiojdfojiofdsjio doioij dsofij cosj dissd fd",
        "odpkaiofsjn cnudnc fndj ndcsn sd csdn isdo odj dsvv oivns ofvjsoi jvfosjf jofsij ofsj oifj soj vo fdjosijciojsdiojdfojiofdsjio doioij dsofij cosj dissd fd",
        "odpkaiofsjn cnudnc fndj ndcsn sd csdn isdo odj dsvv oivns ofvjsoi jvfosjf jofsij ofsj oifj soj vo fdjosijciojsdiojdfojiofdsjio doioij dsofij cosj dissd fd",
        "odpkaiofsjn cnudnc fndj ndcsn sd csdn isdo odj dsvv oivns ofvjsoi jvfosjf jofsij ofsj oifj soj vo fdjosijciojsdiojdfojiofdsjio doioij dsofij cosj dissd fd",
      ],
      link: "https://google.com",
    },
  ];

  return (
    <div>
      <p className="projects_title">Projects</p>
      <div className="projects_box_container">
        {projectsData.map((value, key) => (
          <ProjectBox
            title={value.title}
            image={value.image}
            sentences={value.sentences}
            link={value.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
