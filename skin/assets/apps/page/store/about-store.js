/* global portfolioDashboard */
import React, {useState, useReducer, useEffect, useContext} from 'react';
import {FetchData} from './fetch-data';

import {mediaReducer, initialState, UPDATE_MEDIA, REMOVE_MEDIA} from '../reducers/media';

const AboutStore = React.createContext([{}, () => {}]);

const AboutStoreProvider = (props) => {
  const {
    dataLoaded,
    data,
  } = useContext(FetchData);

  // about
  const [aboutAnimationFile, setAboutAnimationFile] = useReducer(mediaReducer, initialState);
  const [aboutAccentColor, setAboutAccentColor] = useState('');
  const [aboutDescription, setAboutDescription] = useState('');



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

  useEffect(() => {

    console.log('about loaded');

  }, [dataLoaded, data]);

  return (
    <AboutStore.Provider value={{
      attributes: {
        aboutAnimationFile,
        aboutAccentColor,
        aboutDescription,
      },
      reducers: {
        handleAboutAnimationUpdate,
        handleRemoveAboutAnimation,
        setAboutAccentColor,
        setAboutDescription,
      },
    }}>
      {props.children}
    </AboutStore.Provider>
  );
};

export {AboutStore, AboutStoreProvider};
