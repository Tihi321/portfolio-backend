import {__} from '@wordpress/i18n';
import ProjectsInput from './ProjectsInput';
import {ButtonRowElement} from '../../../components';

const ProjectsOptions = (props) => {
  const {
    attributes: {
      projects,
      showPicker,
    },
    dataStore: {
      handleAddProject,
    },
    dataStore,
  } = props;

  const projectsNum = projects.length;


  const projectElements = projects.map((project, id) => {
    return (
      <ProjectsInput
        showPicker={showPicker}
        key={id}
        id={id}
        project={project}
        length={projectsNum}
        dataStore={dataStore}
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
