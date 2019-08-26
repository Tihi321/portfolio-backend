import React, {useState, useReducer} from 'react';

import {mediaReducer, initialState, UPDATE_MEDIA, REMOVE_MEDIA} from '../reducers/media';

const AboutStore = React.createContext([{}, () => {}]);

const AboutStoreProvider = (props) => {

  // about
  const [aboutAnimationFile, setAboutAnimationFile] = useReducer(mediaReducer, initialState);
  const [aboutAccentColor, setAboutAccentColor] = useState('');
  const [aboutDescription, setAboutDescription] = useState('');
  const [aboutPage, setAboutPage] = useState('');

  const handleAboutAnimationUpdate = (media) => {
    setAboutAnimationFile({
      type: UPDATE_MEDIA,
      media,
    });
  };

  const handleRemoveAboutAnimation = () => {
    setAboutAnimationFile({
      type: REMOVE_MEDIA,
    });
  };

  const initialUpdate = (data) => {
    const {
      aboutAccentColor: apiAboutAccentColor,
      aboutAnimationFile: apiAboutAnimationFile,
      aboutDescription: apiAboutDescription,
      aboutPage: apiAboutPage,
    } = data;

    setAboutAccentColor(apiAboutAccentColor);
    handleAboutAnimationUpdate(apiAboutAnimationFile);
    setAboutDescription(apiAboutDescription);
    setAboutPage(apiAboutPage);
  };

  return (
    <AboutStore.Provider value={{
      attributes: {
        aboutAnimationFile,
        aboutAccentColor,
        aboutDescription,
        aboutPage,
      },
      actions: {
        initialUpdate,
        handleAboutAnimationUpdate,
        handleRemoveAboutAnimation,
        setAboutAccentColor,
        setAboutDescription,
        setAboutPage,
      },
    }}>
      {props.children}
    </AboutStore.Provider>
  );
};

export {AboutStore, AboutStoreProvider};
