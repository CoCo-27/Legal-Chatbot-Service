import axios from 'axios';
import backend_api from 'src/config';

const summarize = (email) => {
  return axios.post(backend_api + 'upload/summarize', {
    email: email,
  });
};

export default {
  summarize,
};
