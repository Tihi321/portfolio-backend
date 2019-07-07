import React, {useState, useReducer} from 'react';

import {mediaReducer, initialState, UPDATE_MEDIA, REMOVE_MEDIA} from '../reducers/media';

import {projectsReducer, SET_PROJECTS, UPDATE_PROJECT, REMOVE_PROJECT, ADD_NEW_PROJECT, MOVE_PROJECT_UP, MOVE_PROJECT_DOWN} from '../reducers/projects';

const AndroidStore = React.createContext([{}, () => {}]);

const AndroidStoreProvider = (props) => {

  // android
  const [androidAnimationFile, setAndroidAnimationFile] = useReducer(mediaReducer, initialState);
  const [androidAccentColor, setAndroidAccentColor] = useState('');
  const [androidDescription, setAndroidDescription] = useState('');

  const [androidProjects, dispatchAndroidProjects] = useReducer(projectsReducer, []);

  const handleAndroidProjectOnChange = (projectId, text, updateType) => {
    dispatchAndroidProjects({
      type: UPDATE_PROJECT,
      projectId,
      updateType,
      text,
    });
  };

  const handleRemoveAndroidProject = (projectId) => {
    dispatchAndroidProjects({
      type: REMOVE_PROJECT,
      projectId,
    });
  };

  const handleAndroidProjectUp = (projectId) => {
    dispatchAndroidProjects({
      type: MOVE_PROJECT_UP,
      projectId,
    });
  };

  const handleAndroidProjectDown = (projectId) => {
    dispatchAndroidProjects({
      type: MOVE_PROJECT_DOWN,
      projectId,
    });
  };

  const handleAddAndroidProject = () => {
    dispatchAndroidProjects({
      type: ADD_NEW_PROJECT,
    });
  };


  const handleAndroidAnimationUpdate = (media) => {
    setAndroidAnimationFile({
      type: UPDATE_MEDIA,
      media,
    });
  };

  const handleRemoveAndroidAnimation = () => {
    setAndroidAnimationFile({
      type: REMOVE_MEDIA,
    });
  };

  const initialUpdate = (data) => {
    const {
      androidAccentColor: apiAndroidAccentColor,
      androidAnimationFile: apiAndroidAnimationFile,
      androidDescription: apiAndroidDescription,
      androidProjects: apiAndroidProjects,
    } = data;

    setAndroidAccentColor(apiAndroidAccentColor);
    handleAndroidAnimationUpdate(apiAndroidAnimationFile);
    setAndroidDescription(apiAndroidDescription);

    dispatchAndroidProjects({
      type: SET_PROJECTS,
      projects: apiAndroidProjects,
    });
  };

  return (
    <AndroidStore.Provider value={{
      attributes: {
        androidAnimationFile,
        androidAccentColor,
        androidDescription,
        androidProjects,
      },
      actions: {
        initialUpdate,
        handleAndroidAnimationUpdate,
        handleRemoveAndroidAnimation,
        setAndroidAccentColor,
        setAndroidDescription,
        handleAndroidProjectOnChange,
        handleRemoveAndroidProject,
        handleAndroidProjectUp,
        handleAndroidProjectDown,
        handleAddAndroidProject,
      },
    }}>
      {props.children}
    </AndroidStore.Provider>
  );
};

export {AndroidStore, AndroidStoreProvider};
