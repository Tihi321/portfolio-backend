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
      videoLottie,
    },
    actions: {
      handleVideoAnimationUpdate,
      handleRemoveVideoAnimation,
      setVideoAccentColor,
      setVideoDescription,
      setVideoLottie,
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
        loopLottie={videoLottie}
        setLoopLottie={setVideoLottie}
      />
      <VideoProjects />
    </Fragment>
  );
};

export default Video;
