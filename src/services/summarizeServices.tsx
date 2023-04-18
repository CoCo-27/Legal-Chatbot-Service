import axios from 'axios';
import backend_api from 'src/config';

const summarize = (email, prompt) => {
  return axios.post(backend_api + 'upload/summarize', {
    email: email,
    prompt: prompt,
  });
};

export default {
  summarize,
};
