// Parse dashboard data.
export const getDashboardOptions = (data) => {

  const {
    generalOptions: {
      logo: apiLogo,
      message: apiMessage,
      showMessage: apiShowMessage,
    },
    projectsOptions: {
      projects: apiProjects,
    },
  } = data;

  const showMessageValue = (apiShowMessage === '1') || false;

  const projectsArr = (apiProjects) ? JSON.parse(apiProjects) : [{
    title: '',
    path: '',
    color: '',
    link: '',
  }];

  return {
    showMessageValue,
    apiMessage,
    apiLogo: JSON.parse(apiLogo),
    projectsArr,
  };
};
