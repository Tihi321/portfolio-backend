import {swapObjects} from '../../../utils/modifiers';

export const SET_VIDEO_PROJECTS = 'SET_VIDEO_PROJECTS';
export const UPDATE_VIDEO_PROJECT = 'UPDATE_VIDEO_PROJECT';
export const REMOVE_VIDEO_PROJECT = 'REMOVE_VIDEO_PROJECT';
export const ADD_NEW_VIDEO_PROJECT = 'ADD_NEW_VIDEO_PROJECT';
export const MOVE_VIDEO_PROJECT_UP = 'MOVE_VIDEO_PROJECT_UP';
export const MOVE_VIDEO_PROJECT_DOWN = 'MOVE_VIDEO_PROJECT_DOWN';

const handleUpdateVideoProjects = (projectId, updateType, values, state) => {
  const newState = state.map((value, id) => {
    if (projectId !== id) {
      return value;
    }

    switch (updateType) {
      case 'removeImage':
        return {
          ...value,
          image: {
            id: -1,
            url: '',
            title: '',
          },
        };
      case 'image':
        return {
          ...value,
          image: {
            id: values.id,
            url: values.url,
            title: values.title,
          },
        };
      case 'link':
        return {
          ...value,
          link: values,
        };
      default:
        return {
          ...value,
          title: values,
        };
    }
  });

  return newState;
};

const handleRemoveVideoProject = (projectId, state) => {
  return state.filter((value, id) => projectId !== id);
};

const moveProjectUp = (projectId, state) => {
  return swapObjects(state, projectId, projectId - 1);
};

const moveProjectDown = (projectId, state) => {
  return swapObjects(state, projectId, projectId + 1);
};

const addNewVideoProject = (state) => {
  const newprojectsArr = [...state];

  return newprojectsArr.concat([{
    title: '',
    link: '',
    image: {
      id: -1,
      url: '',
      title: '',
    },
  }]);

};

export const videoProjectsReducer = (state, action) => {
  switch (action.type) {
    case SET_VIDEO_PROJECTS:
      return action.projects.map((project) => {
        return {
          ...project,
          image: JSON.parse(project.image),
        };
      });
    case UPDATE_VIDEO_PROJECT:
      return handleUpdateVideoProjects(action.projectId, action.updateType, action.values, state);
    case REMOVE_VIDEO_PROJECT:
      return handleRemoveVideoProject(action.projectId, state);
    case ADD_NEW_VIDEO_PROJECT:
      return addNewVideoProject(state);
    case MOVE_VIDEO_PROJECT_UP:
      return moveProjectUp(action.projectId, state);
    case MOVE_VIDEO_PROJECT_DOWN:
      return moveProjectDown(action.projectId, state);
    default:
      return state;
  }
};
