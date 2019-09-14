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
      aboutAnimationFile,
      aboutDescription,
      aboutPage,
    },
    webOptions: {
      webAccentColor,
      webAnimationFile,
      webDescription,
      webProjects,
    },
    videoOptions: {
      videoAccentColor,
      videoAnimationFile,
      videoDescription,
      videoProjects,
    },
    androidOptions: {
      androidAccentColor,
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
      aboutAnimationFile: JSON.parse(aboutAnimationFile),
      aboutDescription,
      aboutPage,
    },
    webOptions: {
      webAccentColor,
      webAnimationFile: JSON.parse(webAnimationFile),
      webDescription,
      webProjects: webProjectsArr,
    },
    videoOptions: {
      videoAccentColor,
      videoAnimationFile: JSON.parse(videoAnimationFile),
      videoDescription,
      videoProjects: videoProjectsArr,
    },
    androidOptions: {
      androidAccentColor,
      androidAnimationFile: JSON.parse(androidAnimationFile),
      androidDescription,
      androidProjects: androidProjectsArr,
    },
  };
};
