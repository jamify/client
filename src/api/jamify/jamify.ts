import axios from 'axios';

const jamifyClient = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_JAMIFY_BASE_URI,
  });
};

export default jamifyClient;
