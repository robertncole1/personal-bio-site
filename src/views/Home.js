import React from 'react';
import PropTypes from 'prop-types';
import Projects from '../App/components/Projects';
import Header from '../App/components/Header';

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
      <div className="card-cont">
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
