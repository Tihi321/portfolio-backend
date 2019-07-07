export const UPDATE_MEDIA = 'UPDATE_MEDIA';
export const REMOVE_MEDIA = 'REMOVE_MEDIA';

const handleMediaUpdate = (media) => {
  return {
    id: media.id,
    url: media.url,
    title: media.title,
  };
};

const handleRemoveMedia = () => {
  return {
    id: -1,
    url: '',
    title: '',
  };
};

export const initialState = {
  id: -1,
  url: '',
  title: '',
};

export const mediaReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_MEDIA:
      return handleMediaUpdate(action.media);
    case REMOVE_MEDIA:
      return handleRemoveMedia();
    default:
      return state;
  }
};
