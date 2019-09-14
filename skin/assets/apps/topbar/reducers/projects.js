import {swapObjects} from '../../../utils/modifiers';

export const SET_PROJECTS = 'SET_PROJECTS';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const ADD_NEW_PROJECT = 'ADD_NEW_PROJECT';
export const MOVE_PROJECT_UP = 'MOVE_PROJECT_UP';
export const MOVE_PROJECT_DOWN = 'MOVE_PROJECT_DOWN';

const handleUpdateProject = (projectId, updateType, text, state) => {
  const newState = state.map((value, id) => {
    if (projectId !== id) {
      return value;
    }

    switch (updateType) {
      case 'path':
        return {
          ...value,
          path: text,
        };
      case 'color':
        return {
          ...value,
          color: text,
        };
      case 'link':
        return {
          ...value,
          link: text,
        };
      default:
        return {
          ...value,
          title: text,
        };
    }
  });

  return newState;
};

const handleRemoveProject = (projectId, state) => {
  return state.filter((value, id) => projectId !== id);
};

const moveProjectUp = (projectId, state) => {
  return swapObjects(state, projectId, projectId - 1);
};

const moveProjectDown = (projectId, state) => {
  return swapObjects(state, projectId, projectId + 1);
};

const addNewProject = (state) => {
  const newProjectsArr = [...state];

  return newProjectsArr.concat([{
    title: '',
    path: '',
    color: '',
    link: '',
  }]);

};

export const projectsReducer = (state, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return action.projects;
    case UPDATE_PROJECT:
      return handleUpdateProject(action.projectId, action.updateType, action.text, state);
    case REMOVE_PROJECT:
      return handleRemoveProject(action.projectId, state);
    case ADD_NEW_PROJECT:
      return addNewProject(state);
    case MOVE_PROJECT_UP:
      return moveProjectUp(action.projectId, state);
    case MOVE_PROJECT_DOWN:
      return moveProjectDown(action.projectId, state);
    default:
      return state;
  }
};
