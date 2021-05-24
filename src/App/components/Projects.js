import React, { useState } from 'react';
import {
  Card, CardText, CardSubtitle, CardLink,
  CardTitle, CardBody
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteProject } from '../../helpers/data/projectData';

const Projects = ({
  firebaseKey,
  setProjects,
  projects
}) => {
  const [editing, setEditing] = useState(false);

  const handleProjectsButton = (type) => {
    switch (type) {
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'delete':
        deleteProject(firebaseKey)
          .then(setProjects);
        break;
      default:
        console.warn('No button clicked');
    }
  };

  return (
    projects.map((project) => (
      <Card key={project.firebaseKey}>
      <CardBody>
        <CardTitle tag="h5">{project.title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{project.technologiesUsed}</CardSubtitle>
      </CardBody>
      <img width="100%" className="img-container" src={project.screenshot} alt={project.title}/>
      <CardBody>
        <CardText>{project.description}</CardText>
        <CardLink href={project.url}>View Project</CardLink>
        <CardLink href="#" onClick={() => handleProjectsButton('edit')}>
          {editing ? 'Close Form' : 'Edit Board'}
        </CardLink>
        <CardLink className="delete-link" href="#" onClick={() => handleProjectsButton('delete')}>Delete</CardLink>
      </CardBody>
    </Card>
    ))
  );
};

Projects.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  setProjects: PropTypes.func,
  projects: PropTypes.array
};

export default Projects;
