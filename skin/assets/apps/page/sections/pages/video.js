import React, {Fragment, useContext} from 'react';
import {VideoStore} from '../../store/video-store';
import VideoProjects from '../video-projects/projects';
import SharedItems from '../shared-items';

const Video = (props) => {
  const {
    attributes: {
      videoAnimationFile,
      videoAccentColor,
      videoDescription,
    },
    actions: {
      handleVideoAnimationUpdate,
      handleRemoveVideoAnimation,
      setVideoAccentColor,
      setVideoDescription,
    },
  } = useContext(VideoStore);

  return (
    <Fragment>
      <SharedItems
        animationFile={videoAnimationFile}
        accentColor={videoAccentColor}
        description={videoDescription}
        handleAnimationFileUpdate={handleVideoAnimationUpdate}
        handleRemoveAnimationFile={handleRemoveVideoAnimation}
        setAccentColor={setVideoAccentColor}
        setDescription={setVideoDescription}
      />
      <VideoProjects />
    </Fragment>
  );
};

export default Video;
