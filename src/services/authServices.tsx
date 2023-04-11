import axios from 'axios';

const authRegister = (data) => {
  console.log('data = ', data);
  return axios.post('http://localhost:8080/user/register', data);
};

const authLogin = (data) => {
  return axios.post('http://localhost:8080/user/login', data);
};

export default {
  authRegister,
  authLogin,
};
