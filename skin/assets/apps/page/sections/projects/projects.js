import React from 'react';
import {__} from '@wordpress/i18n';
import ProjectsItem from './projects-item';
import {ButtonRowElement} from '../../../../components';

const Projects = (props) => {

  const {
    projects,
    handleProjectOnChange,
    handleRemoveProject,
    handleProjectUp,
    handleProjectDown,
    handleAddProject,
  } = props;

  const projectsNum = projects.length;

  const itemElements = projects.map((project, id) => {
    return (
      <ProjectsItem
        key={id}
        id={id}
        project={project}
        length={projectsNum}
        handleProjectOnChange={handleProjectOnChange}
        handleRemoveProject={handleRemoveProject}
        handleProjectUp={handleProjectUp}
        handleProjectDown={handleProjectDown}
      />
    );
  });

  return (
    <div
      className="options"
    >
      <ul
        className="projects__items"
      >
        {itemElements}
      </ul>
      <ButtonRowElement
        onClick={handleAddProject}
        title={__('Add new project', 'portfolio-backend')}
      />
    </div>
  );
};

export default Projects;
