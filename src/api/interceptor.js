import $qs from 'qs';
import axios from 'axios';

const $axios = axios.create({
  baseURL: 'http://test.shoudaozi.com:5000',
  timeout: 15 * 1000,
});
$axios.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    config.method === 'post'
      ? config.data = $qs.stringify({ ...config.data })
      : config.params = { ...config.data };
    // if token
    config.headers['Authorization'] = `Bearer `;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject();
  }
);

export default $axios;
