import axios from 'axios';
import backend_api from 'src/config';

const authRegister = (data) => {
  console.log('data = ', data);
  return axios.post(backend_api + 'user/register', data);
};

const authLogin = (data) => {
  console.log('data = ', data);
  return axios.post(backend_api + 'user/login', data);
};

const forgotPassword = (data) => {
  return axios.post(backend_api + 'user/forgotPassword', data);
};

const resetPassword = (data) => {
  return axios.post(backend_api + 'user/resetPassword', data);
};

export default {
  authRegister,
  authLogin,
  forgotPassword,
  resetPassword,
};
