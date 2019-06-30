import React, {useContext} from 'react';
import {__} from '@wordpress/i18n';
import ProjectsInput from './project-input';
import {ButtonRowElement} from '../../../components';
import {StoreContext} from '../context/store';

const ProjectsOptions = (props) => {

  const {
    attributes: {
      projects,
    },
    reducers: {
      handleAddProject,
    },
  } = useContext(StoreContext);

  const projectsNum = projects.length;

  const projectElements = projects.map((project, id) => {
    return (
      <ProjectsInput
        key={id}
        id={id}
        project={project}
        length={projectsNum}
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
        {projectElements}
      </ul>
      <ButtonRowElement
        onClick={handleAddProject}
        title={__('Add new project', 'portfolio-backend')}
      />
    </div>
  );
};

export default ProjectsOptions;
