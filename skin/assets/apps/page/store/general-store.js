/* global portfolioDashboard */
import React, {useState, useReducer, useEffect, useContext} from 'react';
import {FetchData} from './fetch-data';

import {mediaReducer, initialState, UPDATE_MEDIA, REMOVE_MEDIA} from '../reducers/media';
import {itemsReducer, SET_ITEMS, UPDATE_ITEM, REMOVE_ITEM, ADD_NEW_ITEM, MOVE_ITEM_UP, MOVE_ITEM_DOWN} from '../reducers/items';

const GeneralStore = React.createContext([{}, () => {}]);

const GeneralStoreProvider = (props) => {
  const {
    dataLoaded,
    data,
  } = useContext(FetchData);

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

    const {
      generalOptions,
    } = data;

    if (generalOptions) {
      const {
        apiGithub,
        apiLinkedin,
        apiYoutube,
        apiGooglePlay,
        apiContactMail,
        menuItems: items,
        apiLogo,
      } = generalOptions;

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
    }

  }, [dataLoaded, data]);

  return (
    <GeneralStore.Provider value={{
      attributes: {
        logo,
        github,
        linkedin,
        youtube,
        googlePlay,
        contactMail,
        pageActive,
        menuItems,
      },
      reducers: {
        handleLogoUpdate,
        handleRemoveLogo,
        setGithub,
        setLinkedin,
        setYoutube,
        setGooglePlay,
        setContactMail,
        setPageActive,
        handleAddMenuItem,
        handleMenuItemOnChange,
        handleRemoveMenuItem,
        handleMenuItemUp,
        handleMenuItemDown,
      },
    }}>
      {props.children}
    </GeneralStore.Provider>
  );
};

export {GeneralStore, GeneralStoreProvider};
