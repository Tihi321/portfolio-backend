export const UPDATE_LOGO = 'UPDATE_LOGO';
export const REMOVE_LOGO = 'REMOVE_LOGO';

const handleLogoUpdate = (image) => {
  return {
    id: image.id,
    url: image.url,
    title: image.title,
  };
};

const handleRemoveLogo = () => {
  return {
    id: -1,
    url: '',
    title: '',
  };
};

export const logoReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_LOGO:
      return handleLogoUpdate(action.image);
    case REMOVE_LOGO:
      return handleRemoveLogo();
    default:
      return state;
  }
};
