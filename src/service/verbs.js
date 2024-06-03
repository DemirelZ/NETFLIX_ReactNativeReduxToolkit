import Client from './instance';

export const getRequest = async (URL, params) => {
  const response = await Client.get(URL, {params: params});
  return response.data.results;
};

export const postRequest = async (URL, payload) => {
  const response = await Client.post(URL, payload);
  return response.data.results;
};

export const putRequest = async (URL, payload) => {
  const response = await Client.put(URL, payload);
  return response.data.results;
};

export const patchRequest = async (URL, payload) => {
  const response = await Client.patch(URL, payload);
  return response.data.results;
};

export const deleteRequest = async (URL, payload) => {
  const response = await Client.delete(URL, payload);
  return response.data.results;
};
