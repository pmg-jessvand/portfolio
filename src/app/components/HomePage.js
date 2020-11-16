import React from 'react';

import { ProjectList, Footer } from '../components';
import HeroImg from '../images/jv-hero.jpg';
import AboutImg from '../images/jv-wood.jpg';
import { AiOutlineArrowDown } from 'react-icons/ai';

import technologies from '../data/technologies.json';

const HomePage = () => {

  return (
    <div className="home-page">
      <div className="hero">
        <img src={HeroImg} alt="hero-img" />
        <div className="hero-txt">
          <p>Hello, I'm <strong>Jesse</strong></p>
          <p>Your friendly neighbourhood</p>
          <p><strong>Web Developer</strong></p>
          <p className="hero-icon"> <a href="#about">  <AiOutlineArrowDown / > </a></p>
        </div>
      </div>

      <div className="container page-content">
          <div id="about">
            <h2>Over mij</h2>
            <div className="section-content">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-6 col-xl-6 about-img">
                  <img src={AboutImg} alt="about-img"/>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6 about-txt">
                  <p>Ik ben een Full-stack Development student aan Arteveldehogeschool in Gent. Met mijn kennis van Web Development, Design en Marketing probeer ik het verschil te maken in deze digitale werled.</p>
                  <p className="quote">"think, visualize, code"</p>
                  <a href="./jessevdm-cv.pdf" download="jessevdm-cv.pdf" className="button">Download mijn CV</a>
                </div>
              </div>
            </div>
          </div>

          <div id="technologies">
            <h2>Webtechnologieën</h2>
            <div className="section-content">
              <div className="row">
                {technologies.map((item) => {
                  return(
                    <div className="col-6 col-md-6 col-lg-4 col-xl-4" key={item.technology}>
                      <div className="tech-card">
                        <p>{item.technology}</p>
                        <img src={item.icon} alt="tech-icon"/>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <ProjectList />

      </div>

      <Footer />
    </div>
  )
}

export default HomePage;