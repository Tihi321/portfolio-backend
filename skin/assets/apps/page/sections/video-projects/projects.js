import React, {useContext} from 'react';
import {__} from '@wordpress/i18n';
import {VideoStore} from '../../store/video-store';
import VideoProjectsItem from './projects-item';
import {ButtonRowElement} from '../../../../components';

const VideoProjects = (props) => {

  const {
    attributes: {
      videoProjects,
    },
    reducers: {
      handleAddVideoProject,
    },
  } = useContext(VideoStore);

  const projectsNum = videoProjects.length;

  const itemElements = videoProjects.map((project, id) => {
    return (
      <VideoProjectsItem
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
        {itemElements}
      </ul>
      <ButtonRowElement
        onClick={handleAddVideoProject}
        title={__('Add new project', 'portfolio-backend')}
      />
    </div>
  );
};

export default VideoProjects;
