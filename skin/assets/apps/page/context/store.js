/* global portfolioDashboard */
import React, {useState, useReducer, useEffect} from 'react';
import {getDashboardOptions} from '../helpers/fetch-api';
import {saveData} from '../../../helpers/fetch';

import {logoReducer, UPDATE_LOGO, REMOVE_LOGO} from '../reducers/media';
import {itemsReducer, SET_ITEMS, UPDATE_ITEM, REMOVE_ITEM, ADD_NEW_ITEM, MOVE_ITEM_UP, MOVE_ITEM_DOWN} from '../reducers/items';

const StoreContext = React.createContext([{}, () => {}]);

const StoreProvider = (props) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [logo, dispatchLogo] = useReducer(logoReducer, {
    logo: {
      id: -1,
      url: '',
      title: '',
    },
  });
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [youtube, setYoutube] = useState('');
  const [googlePlay, setGooglePlay] = useState('');
  const [contactMail, setContactMail] = useState('');

  const [pageActive, setPageActive] = useState('options');
  const [menuItems, dispatchMenuItems] = useReducer(itemsReducer, []);

  const handleLogoUpdate = (image) => {
    dispatchLogo({
      type: UPDATE_LOGO,
      image,
    });
  };

  const handleRemoveLogo = () => {
    dispatchLogo({
      type: REMOVE_LOGO,
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
      },
    }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export {StoreContext, StoreProvider};
