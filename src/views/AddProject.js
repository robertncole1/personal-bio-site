import React from 'react';
import PropTypes from 'prop-types';
import ProjectsForm from '../App/components/ProjectsForm';

function AddProject({ setProjects }) {
  return (
    <div>
      <ProjectsForm
        setProjects={setProjects}
      />
    </div>
  );
}

AddProject.propTypes = {
  setProjects: PropTypes.func,
};

export default AddProject;
