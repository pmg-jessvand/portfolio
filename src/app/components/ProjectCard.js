import React, { useState } from 'react';
import ProjectDetail from './ProjectDetail';

const ProjectCard = ({ data }) => {

  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="col-12 col-md-12 col-lg-6 col-xl-6" onClick={()=> setIsOpen(!isOpen)} key={data.title}>
    <div className="project-card">
      <div className="card-image">
        <img src={data.img} alt="project-thumbnail"/>
      </div>
      <p>{data.title}</p>
    </div>
    <ProjectDetail data={data} open={isOpen} onClose={() => setIsOpen(!isOpen)}/>
  </div>
  )
}
export default ProjectCard;