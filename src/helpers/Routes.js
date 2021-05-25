import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import AddProject from '../views/AddProject';

export default function Routes({
  firebaseKey,
  screenshot,
  title,
  description,
  technologiesUsed,
  url,
  setProjects,
  githubUrl,
  projects,
  admin
}) {
  return (
    <Switch>
      <Route exact path='/' component={() => <Home
        setProjects={setProjects}
        firebaseKey={firebaseKey}
        screenshot={screenshot}
        title={title}
        description={description}
        technologiesUsed={technologiesUsed}
        url={url}
        admin={admin}
        githubUrl={githubUrl}
        projects={projects}/>}
      />
      <Route exact path='/add-project' component={() => <AddProject
        setProjects={setProjects}
        firebaseKey={firebaseKey}
        screenshot={screenshot}
        title={title}
        description={description}
        technologiesUsed={technologiesUsed}
        url={url}
        admin={admin}
        githubUrl={githubUrl}
        projects={projects}/>}
      />
    </Switch>
  );
}

Routes.propTypes = {
  firebaseKey: PropTypes.string,
  screenshot: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  technologiesUsed: PropTypes.string,
  githubUrl: PropTypes.string,
  url: PropTypes.string,
  setProjects: PropTypes.func,
  projects: PropTypes.array,
  admin: PropTypes.any
};
