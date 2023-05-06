import axios from 'axios';
import backend_api from 'src/config';

const createTitle = (value) => {
  return axios.post(backend_api + 'title/create', value);
};

const getTitle = () => {
  return axios.get(backend_api + 'title/get');
};

const editTitle = (value) => {
  return axios.post(backend_api + 'title/edit', { value: value });
};

const object = {
  createTitle,
  getTitle,
  editTitle,
};

export default object;
