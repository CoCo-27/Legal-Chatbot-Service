import axios from 'axios';
import backend_api from 'src/config';

const createQuestion = (value) => {
  return axios.post(backend_api + 'question/create', {
    name: value,
  });
};

const getQuestion = () => {
  return axios.get(backend_api + 'question/get');
};

const editQuestion = (value) => {
  return axios.post(backend_api + 'question/edit', {
    name: value,
  });
};

const object = {
  createQuestion,
  getQuestion,
  editQuestion,
};

export default object;
