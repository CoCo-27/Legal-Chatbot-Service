import axios from 'axios';

const uploadFile = (formData, onUploadProgress) => {
  console.log('data = ', formData);
  return axios.post('http://localhost:8080/upload/file', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress,
  });
};

const embedding = (fileName) => {
  return axios.post('http://localhost:8080/upload/train', {
    filename: fileName,
  });
};

const requestMessage = (value) => {
  console.log('vaule = ', value);
  return fetch('http://localhost:8080/upload/requestMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      value,
    }),
  });
};

export default {
  uploadFile,
  embedding,
  requestMessage,
};
