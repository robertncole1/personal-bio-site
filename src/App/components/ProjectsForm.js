import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addProject, updateProject } from '../../helpers/data/projectData';

const ProjectsForm = ({
  title,
  description,
  screenshot,
  technologiesUsed,
  firebaseKey,
  url,
  githubUrl,
  setProjects
}) => {
  const [project, setProject] = useState({
    title: title || '',
    description: description || '',
    screenshot: screenshot || '',
    technologiesUsed: technologiesUsed || '',
    url: url || '',
    githubUrl: githubUrl || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      updateProject(project).then((projectsArray) => setProjects(projectsArray));
    } else {
      addProject(project).then((projectsArray) => setProjects(projectsArray));
    }
  };

  return (
    <div className='project-form'>
      <Form id='addProjectForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>Project Form</h2>
        <FormGroup>
          <Label for="title">Title:</Label>
          <Input
            name='title'
            id='title'
            value={project.title}
            type='text'
            placeholder='Enter a Project Title'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            name='description'
            id='description'
            value={project.description}
            type='text'
            placeholder='Enter a Description'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
        <Label for="screenshot">Screenshot:</Label>
          <Input
            name='screenshot'
            id='screenshot'
            value={project.screenshot}
            type='url'
            placeholder='Enter a Screenshot URL'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
        <Label for="technologiesUsed">Technologies Used:</Label>
          <Input
            name='technologiesUsed'
            id='technologiesUsed'
            value={project.technologiesUsed}
            type='text'
            placeholder='Enter Technologies Used'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
        <Label for="url">Project URL:</Label>
          <Input
            name='url'
            id='url'
            value={project.url}
            type='url'
            placeholder='Enter url'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
        <Label for="githubUrl">GitHub URL:</Label>
          <Input
            name='githubUrl'
            id='githubUrl'
            value={project.githubUrl}
            type='githubUrl'
            placeholder='Enter Github Url'
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

ProjectsForm.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  screenshot: PropTypes.string,
  technologiesUsed: PropTypes.string,
  firebaseKey: PropTypes.string,
  url: PropTypes.string,
  githubUrl: PropTypes.string,
  setProjects: PropTypes.func
};

export default ProjectsForm;
