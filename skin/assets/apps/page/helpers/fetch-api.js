// Parse dashboard data.
export const getDashboardOptions = (data) => {

  const {
    generalOptions: {
      github,
      linkedin,
      youtube,
      googlePlay,
      wordPress,
      contactMail,
      menuItems,
    },
    aboutOptions: {
      aboutAccentColor,
      aboutLootieLoop,
      aboutAnimationFile,
      aboutDescription,
      aboutPage,
    },
    webOptions: {
      webAccentColor,
      webLootieLoop,
      webAnimationFile,
      webDescription,
      webProjects,
    },
    videoOptions: {
      videoAccentColor,
      videoLootieLoop,
      videoAnimationFile,
      videoDescription,
      videoProjects,
    },
    androidOptions: {
      androidAccentColor,
      androidLootieLoop,
      androidAnimationFile,
      androidDescription,
      androidProjects,
    },
  } = data;

  const menuItemsArr = (menuItems) ? JSON.parse(menuItems) : [{
    title: '',
    color: '',
    link: '',
  }];

  const webProjectsArr = (webProjects) ? JSON.parse(webProjects) : [{
    title: '',
    link: '',
    description: '',
  }];

  const androidProjectsArr = (androidProjects) ? JSON.parse(androidProjects) : [{
    title: '',
    link: '',
    description: '',
  }];

  const videoProjectsArr = (videoProjects) ? JSON.parse(videoProjects) : [{
    title: '',
    link: '',
    image: JSON.stringify({
      id: -1,
      url: '',
      title: '',
    }),
  }];

  return {
    generalOptions: {
      apiGithub: github,
      apiLinkedin: linkedin,
      apiYoutube: youtube,
      apiGooglePlay: googlePlay,
      apiWordpress: wordPress,
      apiContactMail: contactMail,
      menuItems: menuItemsArr,
    },
    aboutOptions: {
      aboutAccentColor,
      aboutLootieLoop: (aboutLootieLoop === '1') || false,
      aboutAnimationFile: JSON.parse(aboutAnimationFile),
      aboutDescription,
      aboutPage,
    },
    webOptions: {
      webAccentColor,
      webLootieLoop: (webLootieLoop === '1') || false,
      webAnimationFile: JSON.parse(webAnimationFile),
      webDescription,
      webProjects: webProjectsArr,
    },
    videoOptions: {
      videoAccentColor,
      videoLootieLoop: (videoLootieLoop === '1') || false,
      videoAnimationFile: JSON.parse(videoAnimationFile),
      videoDescription,
      videoProjects: videoProjectsArr,
    },
    androidOptions: {
      androidAccentColor,
      androidLootieLoop: (androidLootieLoop === '1') || false,
      androidAnimationFile: JSON.parse(androidAnimationFile),
      androidDescription,
      androidProjects: androidProjectsArr,
    },
  };
};
