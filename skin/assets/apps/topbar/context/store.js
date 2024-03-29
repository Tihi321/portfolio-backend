/* global portfolioDashboard */
import React, {useState, useReducer, useEffect} from 'react';
import {getDashboardOptions} from '../helpers/fetch-api';
import {
  saveTopbarData,
  getTopbarData,
} from '../../../services/data';
import {
  setMessageCallback,
  IS_SUCCESS_CLASS,
  IS_ERROR_CLASS,
} from '../../../utils/modifiers';

import {logoReducer, UPDATE_LOGO, REMOVE_LOGO} from '../reducers/media';
import {projectsReducer, SET_PROJECTS, UPDATE_PROJECT, REMOVE_PROJECT, ADD_NEW_PROJECT, MOVE_PROJECT_UP, MOVE_PROJECT_DOWN} from '../reducers/projects';

const StoreContext = React.createContext([{}, () => {}]);

const StoreProvider = (props) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [logo, dispatchLogo] = useReducer(logoReducer, {
    logo: {
      id: -1,
      url: '',
      title: '',
    },
  });
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  const [pageActive, setPageActive] = useState('options');
  const [projects, dispatchProjects] = useReducer(projectsReducer, []);

  const handleLogoUpdate = (image) => {
    dispatchLogo({
      type: UPDATE_LOGO,
      image,
    });
  };

  const handleRemoveLogo = () => {
    dispatchLogo({
      type: REMOVE_LOGO,
    });
  };

  const handleProjectsOnChange = (projectId, text, updateType) => {
    dispatchProjects({
      type: UPDATE_PROJECT,
      projectId,
      updateType,
      text,
    });
  };

  const handleRemoveProject = (projectId) => {
    dispatchProjects({
      type: REMOVE_PROJECT,
      projectId,
    });
  };

  const handleProjectUp = (projectId) => {
    dispatchProjects({
      type: MOVE_PROJECT_UP,
      projectId,
    });
  };

  const handleProjectDown = (projectId) => {
    dispatchProjects({
      type: MOVE_PROJECT_DOWN,
      projectId,
    });
  };

  const handleAddProject = () => {
    dispatchProjects({
      type: ADD_NEW_PROJECT,
    });
  };

  useEffect(() => {

    // fetch dashboard data from dashoard endpoint.
    const fetchData = () => {

      getTopbarData()
        .then((myJson) => {
          const data = getDashboardOptions(myJson);

          const {
            showMessageValue,
            apiMessage,
            apiLogo,
            projectsArr,
          } = data;

          handleLogoUpdate(apiLogo);
          setShowMessage(showMessageValue);
          setMessage(apiMessage);
          dispatchProjects({
            type: SET_PROJECTS,
            projects: projectsArr,
          });
          setDataLoaded(true);
        });
    };

    fetchData();
  }, []);

  const saveOptions = () => {
    const bodyData = {
      showMessage,
      message,
      logo,
      projects,
    };

    const {
      messageElement,
      messageTextElement,
    } = props;


    saveTopbarData(bodyData)
      .then((response) => {

        setMessageCallback(messageElement, messageTextElement, response, IS_SUCCESS_CLASS);

      })
      .catch((error) => {

        setMessageCallback(messageElement, messageTextElement, error, IS_ERROR_CLASS);
      });
  };

  return (
    <StoreContext.Provider value={{
      attributes: {
        dataLoaded,
        logo,
        showMessage,
        message,
        pageActive,
        projects,
      },
      actions: {
        setDataLoaded,
        handleLogoUpdate,
        handleRemoveLogo,
        setShowMessage,
        setMessage,
        setPageActive,
        saveOptions,
        handleAddProject,
        handleProjectsOnChange,
        handleRemoveProject,
        handleProjectUp,
        handleProjectDown,
      },
    }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export {StoreContext, StoreProvider};
