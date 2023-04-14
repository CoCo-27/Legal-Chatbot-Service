import axios from 'axios';
import backend_api from 'src/config';

const authRegister = (data) => {
  console.log('data = ', data);
  return axios.post(backend_api + 'user/register', data);
};

const authLogin = (data) => {
  return axios.post(backend_api + 'user/login', data);
};

export default {
  authRegister,
  authLogin,
};
