// Parse dashboard data.
export const getDashboardOptions = (data) => {

  const {
    generalOptions: {
      logo,
      github,
      linkedin,
      youtube,
      googlePlay,
      contactMail,
      menuItems,
    },
  } = data;

  const menuItemssArr = (menuItems) ? JSON.parse(menuItems) : [{
    title: '',
    path: '',
    color: '',
    link: '',
  }];

  return {
    generalOptions: {
      apiGithub: github,
      apiLinkedin: linkedin,
      apiYoutube: youtube,
      apiGooglePlay: googlePlay,
      apiContactMail: contactMail,
      menuItems: menuItemssArr,
      apiLogo: JSON.parse(logo),
    },
  };
};
