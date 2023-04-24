import axios from 'axios';
import backend_api from 'src/config';

const summarize = (email, fileName, prompt) => {
  return axios.post(backend_api + 'upload/summarize', {
    email: email,
    filename: fileName,
    prompt: prompt,
  });
};

export default {
  summarize,
};
