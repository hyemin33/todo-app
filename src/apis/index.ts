import auth from '@src/utils/auth';
import axios from 'axios';
const accessToken = auth.getToken();

const api = axios.create({
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
