import React, {useState, useReducer} from 'react';

import {itemsReducer, SET_ITEMS, UPDATE_ITEM, REMOVE_ITEM, ADD_NEW_ITEM, MOVE_ITEM_UP, MOVE_ITEM_DOWN} from '../reducers/items';

const GeneralStore = React.createContext([{}, () => {}]);

const GeneralStoreProvider = (props) => {

  const [pageActive, setPageActive] = useState('options');

  // general options
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [youtube, setYoutube] = useState('');
  const [googlePlay, setGooglePlay] = useState('');
  const [wordPress, setWordPress] = useState('');
  const [contactMail, setContactMail] = useState('');

  // aditional menu items
  const [menuItems, dispatchMenuItems] = useReducer(itemsReducer, []);

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

  const initialUpdate = (data) => {
    const {
      apiGithub,
      apiLinkedin,
      apiYoutube,
      apiGooglePlay,
      apiWordpress,
      apiContactMail,
      menuItems: items,
    } = data;

    setGithub(apiGithub);
    setLinkedin(apiLinkedin);
    setYoutube(apiYoutube);
    setGooglePlay(apiGooglePlay);
    setWordPress(apiWordpress);
    setContactMail(apiContactMail);
    dispatchMenuItems({
      type: SET_ITEMS,
      items,
    });
  };

  return (
    <GeneralStore.Provider value={{
      attributes: {
        github,
        linkedin,
        youtube,
        googlePlay,
        wordPress,
        contactMail,
        pageActive,
        menuItems,
      },
      actions: {
        initialUpdate,
        setGithub,
        setLinkedin,
        setYoutube,
        setGooglePlay,
        setWordPress,
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
