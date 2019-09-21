/* global portfolioDashboard */
import React, {useContext, useEffect, useState} from 'react';
import {getDashboardOptions} from '../helpers/fetch-api';
import {
  savePageData,
  getPageData,
} from '../../../services/data';
import {
  setMessageCallback,
  IS_SUCCESS_CLASS,
  IS_ERROR_CLASS,
} from '../../../utils/modifiers';
import {GeneralStore} from './general-store';
import {AboutStore} from './about-store';
import {AndroidStore} from './android-store';
import {VideoStore} from './video-store';
import {WebStore} from './web-store';

const FetchContext = React.createContext([{}, () => {}]);

const FetchContextProvider = (props) => {
  const generalStore = useContext(GeneralStore);
  const aboutStore = useContext(AboutStore);
  const webStore = useContext(WebStore);
  const videoStore = useContext(VideoStore);
  const androidStore = useContext(AndroidStore);

  const [dataLoaded, setDataLoaded] = useState(false);

  const saveOptions = () => {
    let bodyData = {};
    let fatchApi = '';

    const {
      attributes: {
        pageActive,
      },
    } = generalStore;

    if (pageActive === 'options') {

      const {
        attributes: {
          github,
          linkedin,
          youtube,
          googlePlay,
          wordPress,
          contactMail,
          menuItems,
        },
      } = generalStore;

      bodyData = {
        github,
        linkedin,
        youtube,
        googlePlay,
        wordPress,
        contactMail,
        menuItems,
      };

      const {
        savePageOptionsApi,
      } = portfolioDashboard;

      fatchApi = savePageOptionsApi;

    } else if (pageActive === 'about') {

      const {
        attributes: {
          aboutAnimationFile,
          aboutAccentColor,
          aboutLottie,
          aboutDescription,
          aboutPage,
        },
      } = aboutStore;

      bodyData = {
        aboutAccentColor,
        aboutLootieLoop: aboutLottie,
        aboutDescription,
        aboutAnimationFile,
        aboutPage,
      };

      const {
        savePageAboutApi,
      } = portfolioDashboard;

      fatchApi = savePageAboutApi;
    } else if (pageActive === 'webDevelopment') {

      const {
        attributes: {
          webAnimationFile,
          webLottie,
          webAccentColor,
          webDescription,
          webProjects,
        },
      } = webStore;

      bodyData = {
        webAnimationFile,
        webLootieLoop: webLottie,
        webAccentColor,
        webDescription,
        webProjects,
      };

      const {
        savePageWebApi,
      } = portfolioDashboard;

      fatchApi = savePageWebApi;
    } else if (pageActive === 'videoProduction') {

      const {
        attributes: {
          videoAnimationFile,
          videoLottie,
          videoAccentColor,
          videoDescription,
          videoProjects,
        },
      } = videoStore;

      bodyData = {
        videoAnimationFile,
        videoLootieLoop: videoLottie,
        videoAccentColor,
        videoDescription,
        videoProjects,
      };

      const {
        savePageVideoApi,
      } = portfolioDashboard;

      fatchApi = savePageVideoApi;
    } else if (pageActive === 'androidDevelopment') {

      const {
        attributes: {
          androidAnimationFile,
          androidLottie,
          androidAccentColor,
          androidDescription,
          androidProjects,
        },
      } = androidStore;

      bodyData = {
        androidAnimationFile,
        androidLootieLoop: androidLottie,
        androidAccentColor,
        androidDescription,
        androidProjects,
      };

      const {
        savePageAndroidApi,
      } = portfolioDashboard;

      fatchApi = savePageAndroidApi;
    }

    const {
      messageElement,
      messageTextElement,
    } = props;

    savePageData(fatchApi, bodyData)
      .then((response) => {

        setMessageCallback(messageElement, messageTextElement, response, IS_SUCCESS_CLASS);

      })
      .catch((error) => {

        setMessageCallback(messageElement, messageTextElement, error, IS_ERROR_CLASS);
      });
  };

  useEffect(() => {

    const {
      actions: {
        initialUpdate: generalInitialUpdate,
      },
    } = generalStore;

    const {
      actions: {
        initialUpdate: aboutInitialUpdate,
      },
    } = aboutStore;

    const {
      actions: {
        initialUpdate: webInitialUpdate,
      },
    } = webStore;

    const {
      actions: {
        initialUpdate: videoInitialUpdate,
      },
    } = videoStore;

    const {
      actions: {
        initialUpdate: androidInitialUpdate,
      },
    } = androidStore;

    // fetch dashboard data from dashoard endpoint.
    const fetchData = () => {

      getPageData()
        .then((myJson) => {
          const apiData = getDashboardOptions(myJson);

          const {
            generalOptions,
            aboutOptions,
            webOptions,
            videoOptions,
            androidOptions,
          } = apiData;

          aboutInitialUpdate(aboutOptions);
          webInitialUpdate(webOptions);
          videoInitialUpdate(videoOptions);
          androidInitialUpdate(androidOptions);
          generalInitialUpdate(generalOptions);

          setDataLoaded(true);
        });
    };

    fetchData();
  }, []);

  return (
    <FetchContext.Provider value={{
      attributes: {
        dataLoaded,
      },
      actions: {
        saveOptions,
      },
    }}>
      {props.children}
    </FetchContext.Provider>
  );
};

export {FetchContext, FetchContextProvider};
