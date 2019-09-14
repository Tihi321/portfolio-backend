/* global portfolioDashboard */

export function get(model) {
  const {
    root,
  } = portfolioDashboard;
  return fetch(`${root}${model}`);
}

export function put(model, body) {
  const {
    root,
    portfolioNonce,
    nonce,
  } = portfolioDashboard;
  return fetch(`${root}${model}`, {
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
  });
}
