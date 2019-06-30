/* global portfolioDashboard */
import generalHelpers from '../../../helpers/general-helper';

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

export const saveOptionsData = (body, messageElement, messageTextElement) => {
  const {
    root,
    saveTopbarOptionsApi,
    portfolioNonce,
    nonce,
  } = portfolioDashboard;

  fetch(`${root}${saveTopbarOptionsApi}`, {
    method: 'PATCH',
    mode: 'same-origin',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'X-WP-Nonce': nonce,
      'portfolio-nonce': portfolioNonce,
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body,
  })
    .then((res) => {
      return res.json();
    })
    .then((response) => {

      generalHelpers.setMessageCallback(messageElement, messageTextElement, response, generalHelpers.IS_SUCCESS_CLASS);

    })
    .catch((error) => {

      generalHelpers.setMessageCallback(messageElement, messageTextElement, error, generalHelpers.IS_ERROR_CLASS);
    });
};
