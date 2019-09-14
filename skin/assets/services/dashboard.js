/* global portfolioDashboard */
import {put} from './api';

export async function savePageData(model, body) {

  return put(model, JSON.stringify(body)).then((res) => res.json());
}

export async function saveTopbarData(body) {
  const {
    saveTopbarOptionsApi,
  } = portfolioDashboard;

  return put(saveTopbarOptionsApi, JSON.stringify(body)).then((res) => res.json());
}
