/* global portfolioDashboard */
import React, {useContext} from 'react';
import {saveData} from '../../../helpers/fetch';
import {GeneralStore} from '../store/general-store';

const SaveData = React.createContext([{}, () => {}]);

const SaveDataProvider = (props) => {
  const {
    attributes: {
      github,
      linkedin,
      youtube,
      googlePlay,
      contactMail,
      logo,
      menuItems,
    },
  } = useContext(GeneralStore);


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
    <SaveData.Provider value={{
      reducers: {
        saveOptions,
      },
    }}>
      {props.children}
    </SaveData.Provider>
  );
};

export {SaveData, SaveDataProvider};
