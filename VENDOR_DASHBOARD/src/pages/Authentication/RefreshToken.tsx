import axios from 'axios';

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const refreshToken = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.refreshToken) {
    const response = await axios.post(
      `http://localhost:5174/ADMIN/api/user/token`,
      {
        token: user.refreshToken,
      },
    );
    if (response.data.accessToken) {
      user.accessToken = response.data.accessToken;
      localStorage.setItem('user', JSON.stringify(user));
    }
    return response.data.accessToken;
  }
  return null;
};

// Axios interceptor to handle token refresh automatically
axios.interceptors.request.use(
  (config) => {
    const user = getCurrentUser();
    if (user && user.accessToken) {
      config.headers['Authorization'] = 'Bearer ' + user.accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newAccessToken = await refreshToken();
      if (newAccessToken) {
        axios.defaults.headers.common['Authorization'] =
          'Bearer ' + newAccessToken;
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);

export default refreshToken;
