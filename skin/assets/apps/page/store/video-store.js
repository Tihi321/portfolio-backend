import React, {useState, useReducer} from 'react';

import {mediaReducer, initialState, UPDATE_MEDIA, REMOVE_MEDIA} from '../reducers/media';

import {videoProjectsReducer, SET_VIDEO_PROJECTS, UPDATE_VIDEO_PROJECT, REMOVE_VIDEO_PROJECT, ADD_NEW_VIDEO_PROJECT, MOVE_VIDEO_PROJECT_UP, MOVE_VIDEO_PROJECT_DOWN} from '../reducers/video-projects';

const VideoStore = React.createContext([{}, () => {}]);

const VideoStoreProvider = (props) => {

  // video
  const [videoAnimationFile, setVideoAnimationFile] = useReducer(mediaReducer, initialState);
  const [videoAccentColor, setVideoAccentColor] = useState('');
  const [videoDescription, setVideoDescription] = useState('');

  const [videoProjects, dispatchVideoProjects] = useReducer(videoProjectsReducer, []);

  const handleVideoProjectOnChange = (projectId, values, updateType) => {
    dispatchVideoProjects({
      type: UPDATE_VIDEO_PROJECT,
      projectId,
      updateType,
      values,
    });
  };

  const handleRemoveVideoProject = (projectId) => {
    dispatchVideoProjects({
      type: REMOVE_VIDEO_PROJECT,
      projectId,
    });
  };

  const handleVideoProjectUp = (projectId) => {
    dispatchVideoProjects({
      type: MOVE_VIDEO_PROJECT_UP,
      projectId,
    });
  };

  const handleVideoProjectDown = (projectId) => {
    dispatchVideoProjects({
      type: MOVE_VIDEO_PROJECT_DOWN,
      projectId,
    });
  };

  const handleAddVideoProject = () => {
    dispatchVideoProjects({
      type: ADD_NEW_VIDEO_PROJECT,
    });
  };


  const handleVideoAnimationUpdate = (media) => {
    setVideoAnimationFile({
      type: UPDATE_MEDIA,
      media,
    });
  };

  const handleRemoveVideoAnimation = () => {
    setVideoAnimationFile({
      type: REMOVE_MEDIA,
    });
  };

  const initialUpdate = (data) => {
    const {
      videoAccentColor: apiVideoAccentColor,
      videoAnimationFile: apiVideoAnimationFile,
      videoDescription: apiVideoDescription,
      videoProjects: apiVideoProjects,
    } = data;

    setVideoAccentColor(apiVideoAccentColor);
    handleVideoAnimationUpdate(apiVideoAnimationFile);
    setVideoDescription(apiVideoDescription);

    dispatchVideoProjects({
      type: SET_VIDEO_PROJECTS,
      projects: apiVideoProjects,
    });
  };


  return (
    <VideoStore.Provider value={{
      attributes: {
        videoAnimationFile,
        videoAccentColor,
        videoDescription,
        videoProjects,
      },
      actions: {
        initialUpdate,
        handleVideoAnimationUpdate,
        handleRemoveVideoAnimation,
        setVideoAccentColor,
        setVideoDescription,
        handleVideoProjectOnChange,
        handleRemoveVideoProject,
        handleVideoProjectUp,
        handleVideoProjectDown,
        handleAddVideoProject,
      },
    }}>
      {props.children}
    </VideoStore.Provider>
  );
};

export {VideoStore, VideoStoreProvider};
