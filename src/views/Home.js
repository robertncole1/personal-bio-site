import React from 'react';
import PropTypes from 'prop-types';
import Projects from '../App/components/Projects';
import Header from '../App/components/Header';
import About from '../App/components/About';
import Tech from '../App/components/Technologies';

export default function Home({
  firebaseKey,
  screenshot,
  title,
  description,
  technologiesUsed,
  url,
  setProjects,
  githubUrl,
  projects
}) {
  return (
    <>
      <div className="hero-image">
        <Header/>
      </div>
      <div className="fullPage" id="bioPage">
        <About/>
      </div>
      <div id="technologiesPage">
        <Tech/>
      </div>
      <h4 className="title">Projects</h4>
      <div className="card-cont" id="projects-section">
        <Projects className="projects-page"
          setProjects={setProjects}
          firebaseKey={firebaseKey}
          screenshot={screenshot}
          title={title}
          description={description}
          technologiesUsed={technologiesUsed}
          url={url}
          githubUrl={githubUrl}
          projects={projects}
        />
      </div>
    </>
  );
}

Home.propTypes = {
  firebaseKey: PropTypes.string,
  screenshot: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  technologiesUsed: PropTypes.string,
  githubUrl: PropTypes.string,
  url: PropTypes.string,
  setProjects: PropTypes.func,
  projects: PropTypes.array
};
