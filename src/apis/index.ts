import axios from 'axios';

const accessToken = localStorage.getItem('token');

const api = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    if (accessToken && config.headers) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default api;
