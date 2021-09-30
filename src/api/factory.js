import axios from 'axios';

export default (api) => {
  return async (params = {}, options = {}) => {
    const {url, method} = api;
    const base = '';

    return axios.request({
      withCredentials: false,
      url: base + url,
      method,
      [method === 'get' ? 'params' : 'data']: params
    }).then(result => {
      const data = result.data;
      if (options?.stream) {
        return result;
      }
      /**
       * status含义
       * -1 服务端错误
       *  0 OK
       *  1 用户错误
       */
      if (data.status === 0) {
        return data.data;
      } else {
        return Promise.reject(data);
      }
    }).catch(res => {
      return Promise.reject(res);
    });
  };
};
