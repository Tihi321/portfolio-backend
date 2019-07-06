/* global portfolioDashboard */
import generalHelpers from './general-helper';

export const saveData = (body, optionsApi, messageElement, messageTextElement) => {
  const {
    root,
    portfolioNonce,
    nonce,
  } = portfolioDashboard;

  fetch(`${root}${optionsApi}`, {
    method: 'PUT',
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
