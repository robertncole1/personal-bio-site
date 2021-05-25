import React, { useState } from 'react';
import {
  Card, CardText, CardSubtitle, CardLink,
  CardTitle, CardBody
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteProject } from '../../helpers/data/projectData';
import ProjectsForm from './ProjectsForm';

const Projects = ({
  setProjects,
  projects,
  firebaseKey,
  admin
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

  const editView = () => (
    <>
      <CardLink onClick={() => handleProjectsButton('edit')}>
        {editing ? 'Close Form' : 'Edit Card'}
      </CardLink>
      <CardLink className="delete-link" onClick={() => handleProjectsButton('delete')}>Delete</CardLink>
    </>
  );

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
        <CardLink target="_blank" href={project.url}>View Project</CardLink>
        { admin && editView() }
        {
          editing && <ProjectsForm
          setProjects={setProjects}
          firebaseKey={project.firebaseKey}
          title={project.title}
          description={project.description}
          screenshot={project.screenshot}
          technologiesUsed={project.technologiesUsed}
          url={project.url}
          githubUrl={project.githubUrl}
          />
        }
      </CardBody>
    </Card>
    ))
  );
};

Projects.propTypes = {
  firebaseKey: PropTypes.string,
  setProjects: PropTypes.func,
  projects: PropTypes.array,
  admin: PropTypes.any
};

export default Projects;
