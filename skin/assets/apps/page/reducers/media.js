export const UPDATE_MEDIA = 'UPDATE_LOGO';
export const REMOVE_MEDIA = 'REMOVE_LOGO';

const handleLogoUpdate = (media) => {
  return {
    id: media.id,
    url: media.url,
    title: media.title,
  };
};

const handleRemoveLogo = () => {
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
      return handleLogoUpdate(action.media);
    case REMOVE_MEDIA:
      return handleRemoveLogo();
    default:
      return state;
  }
};
