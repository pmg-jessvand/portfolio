import React from 'react';
import { ProjectCard } from '../components';
import projects from '../data/projects.json';

const ProjectList = () => {

  return (
    <div id="projects">
      <h2>Projecten</h2>
      <div className="section-content">
        <div className="container">
          <div className="row project-list">
              {projects.map(project => {
                return(
                  <ProjectCard data={project} key={project.title}/>
                );
              })
              }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;