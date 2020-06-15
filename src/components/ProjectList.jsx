import React from "react";

const ProjectList = (props) => {
  const renderProjects = () =>
    props.projects.map((project, i) => {
      return (
        <div className="project" key={`project-${project.category}-${i}`}>
          <img src={project.img} alt={`project-${project.category}-${i}`} />
        </div>
      );
    });
  return <div className="portfolio">{renderProjects()}</div>;
};

export default ProjectList;
