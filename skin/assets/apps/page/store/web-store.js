/* global portfolioDashboard */
import React, {useState, useReducer, useEffect, useContext} from 'react';
import {FetchData} from './fetch-data';

import {mediaReducer, initialState, UPDATE_MEDIA, REMOVE_MEDIA} from '../reducers/media';
import {projectsReducer, SET_PROJECTS, UPDATE_PROJECT, REMOVE_PROJECT, ADD_NEW_PROJECT, MOVE_PROJECT_UP, MOVE_PROJECT_DOWN} from '../reducers/projects';

const WebStore = React.createContext([{}, () => {}]);

const WebStoreProvider = (props) => {
  const {
    dataLoaded,
    data,
  } = useContext(FetchData);

  // web
  const [webAnimationFile, setWebAnimationFile] = useReducer(mediaReducer, initialState);
  const [webAccentColor, setWebAccentColor] = useState('');
  const [webDescription, setWebDescription] = useState('');

  const [webProjects, dispatchWebProjects] = useReducer(projectsReducer, []);

  const handleWebProjectOnChange = (projectId, text, updateType) => {
    dispatchWebProjects({
      type: UPDATE_PROJECT,
      projectId,
      updateType,
      text,
    });
  };

  const handleRemoveWebProject = (projectId) => {
    dispatchWebProjects({
      type: REMOVE_PROJECT,
      projectId,
    });
  };

  const handleWebProjectUp = (projectId) => {
    dispatchWebProjects({
      type: MOVE_PROJECT_UP,
      projectId,
    });
  };

  const handleWebProjectDown = (projectId) => {
    dispatchWebProjects({
      type: MOVE_PROJECT_DOWN,
      projectId,
    });
  };

  const handleAddWebProject = () => {
    dispatchWebProjects({
      type: ADD_NEW_PROJECT,
    });
  };


  const handleWebAnimation = (media) => {
    setWebAnimationFile({
      type: UPDATE_MEDIA,
      media,
    });
  };

  const handleRemoveWebAnimation = () => {
    setWebAnimationFile({
      type: REMOVE_MEDIA,
    });
  };

  useEffect(() => {

    console.log('Web loaded');

  }, [dataLoaded, data]);

  return (
    <WebStore.Provider value={{
      attributes: {
        webAnimationFile,
        webAccentColor,
        webDescription,
        webProjects,
      },
      reducers: {
        handleWebAnimation,
        handleRemoveWebAnimation,
        setWebAccentColor,
        setWebDescription,
        handleWebProjectOnChange,
        handleRemoveWebProject,
        handleWebProjectUp,
        handleWebProjectDown,
        handleAddWebProject,
      },
    }}>
      {props.children}
    </WebStore.Provider>
  );
};

export {WebStore, WebStoreProvider};
