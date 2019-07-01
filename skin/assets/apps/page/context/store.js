/* global portfolioDashboard */
import React, {useState, useReducer, useEffect} from 'react';
import {getDashboardOptions} from '../helpers/fetch-api';
import {saveData} from '../../../helpers/fetch';

import {mediaReducer, initialState, UPDATE_MEDIA, REMOVE_MEDIA} from '../reducers/media';
import {itemsReducer, SET_ITEMS, UPDATE_ITEM, REMOVE_ITEM, ADD_NEW_ITEM, MOVE_ITEM_UP, MOVE_ITEM_DOWN} from '../reducers/items';

const StoreContext = React.createContext([{}, () => {}]);

const StoreProvider = (props) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [pageActive, setPageActive] = useState('options');

  // general options
  const [logo, dispatchLogo] = useReducer(mediaReducer, initialState);
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [youtube, setYoutube] = useState('');
  const [googlePlay, setGooglePlay] = useState('');
  const [contactMail, setContactMail] = useState('');

  // aditional menu items
  const [menuItems, dispatchMenuItems] = useReducer(itemsReducer, []);

  // about
  const [aboutAnimationFile, setAboutAnimationFile] = useReducer(mediaReducer, initialState);
  const [aboutAccentColor, setAboutAccentColor] = useState('');
  const [aboutDescription, setAboutDescription] = useState('');

  // web
  const [webAnimationFile, setWebAnimationFile] = useReducer(mediaReducer, initialState);
  const [webAccentColor, setWebAccentColor] = useState('');
  const [webDescription, setWebDescription] = useState('');

  // video
  const [videoAnimationFile, setVideoAnimationFile] = useReducer(mediaReducer, initialState);
  const [videoAccentColor, setVideoAccentColor] = useState('');
  const [videoDescription, setVideoDescription] = useState('');

  // android
  const [androidAnimationFile, setAndroidAnimationFile] = useReducer(mediaReducer, initialState);
  const [androidAccentColor, setAndroidAccentColor] = useState('');
  const [androidDescription, setAndroidDescription] = useState('');

  const handleLogoUpdate = (media) => {
    dispatchLogo({
      type: UPDATE_MEDIA,
      media,
    });
  };

  const handleRemoveLogo = () => {
    dispatchLogo({
      type: REMOVE_MEDIA,
    });
  };

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

  const handleVideoAnimationUpdate = (media) => {
    setVideoAnimationFile({
      type: UPDATE_MEDIA,
      media,
    });
  };

  const handleRemoveVideoAnimation = () => {
    setVideoAnimationFile({
      type: REMOVE_MEDIA,
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

  const handleMenuItemOnChange = (itemId, text, updateType) => {
    dispatchMenuItems({
      type: UPDATE_ITEM,
      itemId,
      updateType,
      text,
    });
  };

  const handleRemoveMenuItem = (itemId) => {
    dispatchMenuItems({
      type: REMOVE_ITEM,
      itemId,
    });
  };

  const handleMenuItemUp = (itemId) => {
    dispatchMenuItems({
      type: MOVE_ITEM_UP,
      itemId,
    });
  };

  const handleMenuItemDown = (itemId) => {
    dispatchMenuItems({
      type: MOVE_ITEM_DOWN,
      itemId,
    });
  };

  const handleAddMenuItem = () => {
    dispatchMenuItems({
      type: ADD_NEW_ITEM,
    });
  };

  useEffect(() => {

    // fetch dashboard data from dashoard endpoint.
    const fetchData = () => {

      const {
        root,
        getPageOptionsApi,
      } = portfolioDashboard;

      fetch(root + getPageOptionsApi)
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          const data = getDashboardOptions(myJson);

          const {
            generalOptions: {
              apiGithub,
              apiLinkedin,
              apiYoutube,
              apiGooglePlay,
              apiContactMail,
              menuItems: items,
              apiLogo,
            },
          } = data;

          handleLogoUpdate(apiLogo);
          setGithub(apiGithub);
          setLinkedin(apiLinkedin);
          setYoutube(apiYoutube);
          setGooglePlay(apiGooglePlay);
          setContactMail(apiContactMail);
          dispatchMenuItems({
            type: SET_ITEMS,
            items,
          });
          setDataLoaded(true);
        });
    };

    fetchData();
  }, []);

  const saveOptions = () => {
    const bodyData = JSON.stringify({
      github,
      linkedin,
      youtube,
      googlePlay,
      contactMail,
      logo,
      menuItems,
    });

    const {
      messageElement,
      messageTextElement,
    } = props;

    const {
      savePageOptionsApi,
    } = portfolioDashboard;

    saveData(bodyData, savePageOptionsApi, messageElement, messageTextElement);
  };

  return (
    <StoreContext.Provider value={{
      attributes: {
        dataLoaded,
        logo,
        github,
        linkedin,
        youtube,
        googlePlay,
        contactMail,
        pageActive,
        menuItems,
        aboutAnimationFile,
        aboutAccentColor,
        aboutDescription,
        webAnimationFile,
        webAccentColor,
        webDescription,
        videoAnimationFile,
        videoAccentColor,
        videoDescription,
        androidAnimationFile,
        androidAccentColor,
        androidDescription,
      },
      reducers: {
        setDataLoaded,
        handleLogoUpdate,
        handleRemoveLogo,
        setGithub,
        setLinkedin,
        setYoutube,
        setGooglePlay,
        setContactMail,
        setPageActive,
        saveOptions,
        handleAddMenuItem,
        handleMenuItemOnChange,
        handleRemoveMenuItem,
        handleMenuItemUp,
        handleMenuItemDown,
        handleAboutAnimationUpdate,
        handleRemoveAboutAnimation,
        setAboutAccentColor,
        setAboutDescription,
        handleWebAnimation,
        handleRemoveWebAnimation,
        setWebAccentColor,
        setWebDescription,
        handleVideoAnimationUpdate,
        handleRemoveVideoAnimation,
        setVideoAccentColor,
        setVideoDescription,
        handleAndroidAnimationUpdate,
        handleRemoveAndroidAnimation,
        setAndroidAccentColor,
        setAndroidDescription,
      },
    }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export {StoreContext, StoreProvider};
