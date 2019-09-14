/* global portfolioDashboard */
import {put, get} from './api';

export async function savePageData(model, body) {

  return put(model, JSON.stringify(body)).then((res) => res.json());
}

export async function getPageData() {
  const {
    getPageOptionsApi,
  } = portfolioDashboard;

  return get(getPageOptionsApi).then((res) => res.json());
}

export async function saveTopbarData(body) {
  const {
    saveTopbarOptionsApi,
  } = portfolioDashboard;

  return put(saveTopbarOptionsApi, JSON.stringify(body)).then((res) => res.json());
}

export async function getTopbarData() {
  const {
    getTopbarOptionsApi,
  } = portfolioDashboard;

  return get(getTopbarOptionsApi).then((res) => res.json());
}
