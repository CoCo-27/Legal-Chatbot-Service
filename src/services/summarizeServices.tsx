import axios from 'axios';
import backend_api from 'src/config';

const summarize = (value) => {
  return axios.post(backend_api + 'upload/summarize', value);
};

export default summarize;
