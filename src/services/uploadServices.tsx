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

const embedding = (fileName, email) => {
  return axios.post('http://localhost:8080/upload/train', {
    filename: fileName,
    email: email,
  });
};

const requestMessage = (value, email) => {
  return axios.post('http://localhost:8080/upload/requestMessage', {
    value: value,
    email: email,
  });
};

export default {
  uploadFile,
  embedding,
  requestMessage,
};
