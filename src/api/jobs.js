import AxiosApi from '@/utils/request';

const mokaConfig = {
  orgId: `BBgame`,
  APIKEY: `NUYQMLeT2V5T3SMhXHB6nPE1rFFX95Z5`,
  // baseUrl: `https://mokahrapi.bbgameonline.com/api-platform/v1`,
  // baseUrl: `https://api.mokahr.com/api-platform/v1`,
  baseUrl: `http://192.168.200.14:7001`,
};

const getHeaders = () => {
  const key = btoa(`${mokaConfig.APIKEY}:`);
  return { Authorization: `Basic ${key}` };
};

const api = new AxiosApi(mokaConfig.baseUrl, false, getHeaders);

export const getJobTypeList = () =>
  api.get(`/jobs-groupedby-zhineng/${mokaConfig.orgId}`, { mode: 'social' });
