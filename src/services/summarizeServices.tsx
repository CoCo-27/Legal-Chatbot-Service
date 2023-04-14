import axios from 'axios';

const summarize = (email) => {
  return axios.post('http://localhost:8080/upload/summarize', {
    email: email,
  });
};

export default {
  summarize,
};
