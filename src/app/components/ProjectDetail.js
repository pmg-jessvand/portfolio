import React from 'react';

import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const ProjectDetail = ({ data, open, onClose }) => {

  if(!open) return null

  return (
    <div className="project-detail">
      <div className="detail-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6 col-xl-6">
              <div className="detail-img">
                <img src={data.img} alt="thumbnail"/>
                <ul>
                  {data.tags.map(tag => {
                    return (
                      <li key={tag}>{tag}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 col-xl-6 detail-info">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              {data.url === "" ?
                <div className="detail-buttons">
                  <a href={data.github} target="_blank" rel="noreferrer">Bekijk op GitHub <BsArrowRight /></a>
                </div>
                :
                <div className="detail-buttons">
                  <a href={data.github} target="_blank" rel="noreferrer">Bekijk op GitHub <BsArrowRight /></a>
                  <a href={data.url} target="_blank" rel="noreferrer">Bekijk de website <BsArrowRight /></a>
                </div>
                }
            </div>
            <button onClick={onClose}> <BsArrowLeft /> Terug</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;